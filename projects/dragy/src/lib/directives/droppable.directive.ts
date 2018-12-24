import {
  Directive,
  HostListener,
  ElementRef,
  Output,
  EventEmitter,
  OnInit,
  Renderer2,
  OnDestroy
} from "@angular/core";
import { DropSuccessSyntheticEvent } from "../models/drop-success-synthetic-event";
import { GInternalRegistryService } from "../services/internal-registry.service";
import { DraggableDirectiveConfig } from "../models/draggable-directive.config";
import { DragData } from "../models/drag-data.model";
import { fromEvent, timer } from "rxjs";
import { debounce, takeWhile, distinctUntilChanged, tap } from "rxjs/operators";

@Directive({
  selector: "[gDroppable]"
})
export class DroppableDirective implements OnInit, OnDestroy {
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private internalRegistry: GInternalRegistryService
  ) {}
  private isAlive = true;
  private _tempDropLocation: HTMLElement;
  private validDropTarget = true;
  private _current: {
    eventId: string;
    dragData: DragData;
    config: DraggableDirectiveConfig;
  };
  @Output() dropsuccess = new EventEmitter<DropSuccessSyntheticEvent>();

  ngOnInit(): void {
    this._tempDropLocation = document.createElement("div");
    this._tempDropLocation.style.border = "2px dashed green";
    this._tempDropLocation.style.position = "absolute";
    fromEvent(this.elementRef.nativeElement, "dragover")
      .pipe(
        takeWhile(() => this.isAlive),
        tap((event: DragEvent) => event.preventDefault()),
        distinctUntilChanged((event1: DragEvent, event2: DragEvent) => {
          return (
            event1.clientX === event2.clientX &&
            event1.clientY === event2.clientY
          );
        }),
        debounce(() => timer(100))
      )
      .subscribe(this.dragOverHandler);
  }
  ngOnDestroy(): void {
    this.isAlive = false;
  }
  @HostListener("dragenter", ["$event"])
  dragEnterHandler(event: DragEvent) {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
    const eventId = event.dataTransfer.types[0];
    const dragData = this.internalRegistry.getDragData(eventId);
    const config = this.internalRegistry.getWidgetConfig(dragData.widgetId);
    this._current = {
      eventId: event.dataTransfer.types[0],
      dragData: this.internalRegistry.getDragData(eventId),
      config: this.internalRegistry.getWidgetConfig(dragData.widgetId)
    };
    this._tempDropLocation.style.height = config.componentHeight + "px";
    this._tempDropLocation.style.width = config.componentWidth + "px";
    this.renderer.appendChild(
      this.elementRef.nativeElement,
      this._tempDropLocation
    );
  }
  dragOverHandler = (event: DragEvent) => {
    event.preventDefault();
    console.log(event);
    const react = (this.elementRef
      .nativeElement as HTMLElement).getBoundingClientRect();

    const dropItemStartX =
      event.clientX - react.left - this._current.dragData.offsetX;
    const dropItemEndX = dropItemStartX + this._current.config.componentWidth;
    const dropItemStartY =
      event.clientY - react.top - this._current.dragData.offsetY;
    const dropItemEndY = dropItemStartY + this._current.config.componentHeight;
    this.validDropTarget = !this.internalRegistry
      .getAllViewContainerItem()
      .some(registryItem => {
        return (
          registryItem.startX < dropItemEndX &&
          registryItem.endX > dropItemStartX &&
          registryItem.startY < dropItemEndY &&
          registryItem.endY > dropItemStartY
        );
      });
    this._tempDropLocation.style.top = dropItemStartY + "px";
    this._tempDropLocation.style.left = dropItemStartX + "px";
    // tslint:disable-next-line:semicolon
    this._tempDropLocation.style.borderColor = this.validDropTarget
      ? "Green"
      : "Red";
  };

  @HostListener("dragleave", ["$event"])
  dragLeaveHandler(event: DragEvent) {
    console.log("drag leave");
  }
  @HostListener("drop", ["$event"])
  dropHandler(event: DragEvent) {
    event.preventDefault();
    if (this.validDropTarget) {
      const dropSuccessEvent: DropSuccessSyntheticEvent = {
        event: event,
        componentName: this._current.config.componentName,
        dragSourceSelector: this._current.config.widgetId,
        widgetId: this._current.config.widgetId,
        style: {
          position: "absolute",
          "top.px": this._tempDropLocation.style.top.replace(/px/, ""),
          "left.px": this._tempDropLocation.style.left.replace(/px/, "")
        }
      };

      this.dropsuccess.emit(dropSuccessEvent);
    }
    this.renderer.removeChild(
      this.elementRef.nativeElement,
      this._tempDropLocation
    );
  }
}
