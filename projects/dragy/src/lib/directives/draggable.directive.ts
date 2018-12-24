import {
  Directive,
  HostListener,
  ElementRef,
  Input,
  OnInit,
  OnDestroy
} from "@angular/core";
import { GInternalRegistryService } from "../services/internal-registry.service";
import { DraggableDirectiveConfig } from "../models/draggable-directive.config";
import { DragData } from "../models/drag-data.model";

@Directive({
  selector: "[gDraggable]"
})
export class DraggableDirective implements OnInit, OnDestroy {
  // tslint:disable-next-line:no-input-rename
  @Input("gConfig") config: DraggableDirectiveConfig;

  private registered = false;
  private offsetX: any;
  private offsetY: any;
  constructor(
    private elementRef: ElementRef,
    private internalRegistry: GInternalRegistryService
  ) {}

  ngOnInit(): void {
    if (this.internalRegistry.registerWidget(this.config)) {
      this.registered = true;
      this.elementRef.nativeElement.setAttribute("draggable", "true");
    } else {
      console.error(`Widget id ${this.config.widgetId} is not unique`);
      this.showInvalidWidget();
    }
  }
  ngOnDestroy(): void {
    this.internalRegistry.unRegisterWidget(this.config.widgetId);
  }
  showInvalidWidget() {
    const border = this.elementRef.nativeElement.style.border;
    this.elementRef.nativeElement.style.border = "2px solid red";
    setTimeout(() => {
      this.elementRef.nativeElement.style.border = border;
    }, 2000);
  }
  @HostListener("mousedown", ["$event"])
  mouseDownHandler(event: MouseEvent) {
    if (this.registered) {
      this.offsetX = event.offsetX;
      this.offsetY = event.offsetY;
      console.log(`x: ${this.offsetX},y : ${this.offsetY}`);
    }
  }
  @HostListener("dragstart", ["$event"])
  dragStartHandler(event: DragEvent) {
    if (this.registered) {
      if (this.config.dragImage && false) {
        const image = new Image(
          this.config.componentWidth,
          this.config.componentHeight
        );
        image.src = this.config.dragImage;
        event.dataTransfer.setDragImage(image, 0, 0);
      }
      const eventId = "drag_" + Math.floor(Math.random() * 9999999) + 1;
      this.internalRegistry.addDragData(eventId, {
        offsetX: this.offsetX,
        offsetY: this.offsetY,
        widgetId: this.config.widgetId
      });
      event.dataTransfer.setData(eventId, eventId);
    }
  }
  @HostListener("dragend", ["$event"])
  dragEndHandler(event: DragEvent) {}
}
