import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  Input,
  ChangeDetectionStrategy,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter
} from "@angular/core";
import { GComponentFactoryService } from "../../services/component-factory.service";
import { IWidgetProjection } from "../../interfaces/IWidgetProjection";
import { takeWhile, first } from "rxjs/operators";
import { DropZoneState } from "../../models/drop-zone.state";
import { DropSuccessSyntheticEvent } from "../../models/drop-success-synthetic-event";
import { GComponentRegistryService } from "../../services/component-registry.service";
import { GInternalRegistryService } from "../../services/internal-registry.service";
import { ViewContainerItem } from "../../models/view-container-item.model";

@Component({
  selector: "g-drop-zone",
  template: `
    <div (dropsuccess)="dropsuccessHandler($event)" gDroppable>
      <template #dropContainer></template>
    </div>
  `,
  styles: [
    `
      div {
        width: 100%;
        height: 100%;
      }
      div * {
        pointer-events: none;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropZoneComponent implements OnInit, OnChanges {
  @Input() state: DropZoneState;
  @Output() update = new EventEmitter<DropZoneState>();
  @ViewChild("dropContainer", { read: ViewContainerRef })
  container: ViewContainerRef;

  constructor(
    private gComponentFactoryService: GComponentFactoryService,
    private internalRegistry: GInternalRegistryService
  ) {}

  ngOnInit() {}
  ngOnChanges(changes: SimpleChanges) {
    if ("state" in changes && changes["state"].firstChange) {
      for (const key in this.state.items) {
        if (this.state.items.hasOwnProperty(key)) {
          const dropZoneItem = this.state.items[key];
          this.projectWidgetInView(
            dropZoneItem.widgetId,
            dropZoneItem.componentName,
            dropZoneItem.style
          );
        }
      }
    }
  }
  dropsuccessHandler(syntheticEvent: DropSuccessSyntheticEvent) {
    if (
      this.internalRegistry.checkViewContainerItemEntry(syntheticEvent.widgetId)
    ) {
      return console.error("This widget is alrady pojected in view");
    }
    this.projectWidgetInView(
      syntheticEvent.widgetId,
      syntheticEvent.componentName,
      syntheticEvent.style
    );
    this.state.items[syntheticEvent.widgetId] = {
      componentName: syntheticEvent.componentName,
      style: syntheticEvent.style,
      widgetId: syntheticEvent.widgetId
    };
    this.state.length += 1;
    this.update.emit(this.state);
  }
  projectWidgetInView(
    identifier: string,
    componentName: string,
    style: object
  ) {
    const factory = this.gComponentFactoryService.componentFactory(
      componentName
    );
    const component = this.container.createComponent(factory);
    const widgetProjection = component.instance as IWidgetProjection;
    widgetProjection.widgetId = identifier;
    widgetProjection.style = style;
    widgetProjection._remove
      .pipe(
        takeWhile(_ => widgetProjection.isActive),
        first()
      )
      .subscribe(widgetIdentifier => {
        this.container.remove(
          this.internalRegistry.getViewContainerItem(widgetIdentifier)
            .viewContainerIndex
        );
        this.internalRegistry.removeViewContainerItem(widgetIdentifier);
        delete this.state.items[widgetIdentifier];
        this.state.length -= 1;
        this.update.emit(this.state);
      });
    const computedStyle = getComputedStyle(
      component.location.nativeElement.children[0]
    );
    this.internalRegistry.addViewContainerItem(identifier, {
      viewContainerIndex: this.container.length - 1,
      startX: +style["left.px"],
      startY: +style["top.px"],
      endX: +style["left.px"] + +computedStyle.width.replace(/px/, ""),
      endY: +style["top.px"] + +computedStyle.height.replace(/px/, "")
    });
  }
}
