/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostListener, ElementRef, Input } from "@angular/core";
import { GInternalRegistryService } from "../services/internal-registry.service";
import { DraggableDirectiveConfig } from "../models/draggable-directive.config";
export class DraggableDirective {
    /**
     * @param {?} elementRef
     * @param {?} internalRegistry
     */
    constructor(elementRef, internalRegistry) {
        this.elementRef = elementRef;
        this.internalRegistry = internalRegistry;
        this.registered = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.internalRegistry.registerWidget(this.config)) {
            this.registered = true;
            this.elementRef.nativeElement.setAttribute("draggable", "true");
        }
        else {
            console.error(`Widget id ${this.config.widgetId} is not unique`);
            this.showInvalidWidget();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.internalRegistry.unRegisterWidget(this.config.widgetId);
    }
    /**
     * @return {?}
     */
    showInvalidWidget() {
        /** @type {?} */
        const border = this.elementRef.nativeElement.style.border;
        this.elementRef.nativeElement.style.border = "2px solid red";
        setTimeout(() => {
            this.elementRef.nativeElement.style.border = border;
        }, 2000);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    mouseDownHandler(event) {
        if (this.registered) {
            this.offsetX = event.offsetX;
            this.offsetY = event.offsetY;
            console.log(`x: ${this.offsetX},y : ${this.offsetY}`);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    dragStartHandler(event) {
        if (this.registered) {
            if (this.config.dragImage && false) {
                /** @type {?} */
                const image = new Image(this.config.componentWidth, this.config.componentHeight);
                image.src = this.config.dragImage;
                event.dataTransfer.setDragImage(image, 0, 0);
            }
            /** @type {?} */
            const eventId = "drag_" + Math.floor(Math.random() * 9999999) + 1;
            this.internalRegistry.addDragData(eventId, {
                offsetX: this.offsetX,
                offsetY: this.offsetY,
                widgetId: this.config.widgetId
            });
            event.dataTransfer.setData(eventId, eventId);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    dragEndHandler(event) { }
}
DraggableDirective.decorators = [
    { type: Directive, args: [{
                selector: "[gDraggable]"
            },] }
];
/** @nocollapse */
DraggableDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: GInternalRegistryService }
];
DraggableDirective.propDecorators = {
    config: [{ type: Input, args: ["gConfig",] }],
    mouseDownHandler: [{ type: HostListener, args: ["mousedown", ["$event"],] }],
    dragStartHandler: [{ type: HostListener, args: ["dragstart", ["$event"],] }],
    dragEndHandler: [{ type: HostListener, args: ["dragend", ["$event"],] }]
};
if (false) {
    /** @type {?} */
    DraggableDirective.prototype.config;
    /**
     * @type {?}
     * @private
     */
    DraggableDirective.prototype.registered;
    /**
     * @type {?}
     * @private
     */
    DraggableDirective.prototype.offsetX;
    /**
     * @type {?}
     * @private
     */
    DraggableDirective.prototype.offsetY;
    /**
     * @type {?}
     * @private
     */
    DraggableDirective.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    DraggableDirective.prototype.internalRegistry;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2dhYmxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2RyYWd5LyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvZHJhZ2dhYmxlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUNWLEtBQUssRUFHTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNqRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQU1oRixNQUFNLE9BQU8sa0JBQWtCOzs7OztJQU83QixZQUNVLFVBQXNCLEVBQ3RCLGdCQUEwQztRQUQxQyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBMEI7UUFMNUMsZUFBVSxHQUFHLEtBQUssQ0FBQztJQU14QixDQUFDOzs7O0lBRUosUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDckQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQztTQUNqRTthQUFNO1lBQ0wsT0FBTyxDQUFDLEtBQUssQ0FBQyxhQUFhLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxnQkFBZ0IsQ0FBQyxDQUFDO1lBQ2pFLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1NBQzFCO0lBQ0gsQ0FBQzs7OztJQUNELFdBQVc7UUFDVCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMvRCxDQUFDOzs7O0lBQ0QsaUJBQWlCOztjQUNULE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsTUFBTTtRQUN6RCxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLGVBQWUsQ0FBQztRQUM3RCxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDdEQsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ1gsQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxLQUFpQjtRQUNoQyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO1lBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSxDQUFDLE9BQU8sUUFBUSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztTQUN2RDtJQUNILENBQUM7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsS0FBZ0I7UUFDL0IsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLElBQUksS0FBSyxFQUFFOztzQkFDNUIsS0FBSyxHQUFHLElBQUksS0FBSyxDQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQzVCO2dCQUNELEtBQUssQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7Z0JBQ2xDLEtBQUssQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDOUM7O2tCQUNLLE9BQU8sR0FBRyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQztZQUNqRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRTtnQkFDekMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO2dCQUNyQixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87Z0JBQ3JCLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVE7YUFDL0IsQ0FBQyxDQUFDO1lBQ0gsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQzlDO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxjQUFjLENBQUMsS0FBZ0IsSUFBRyxDQUFDOzs7WUEvRHBDLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYzthQUN6Qjs7OztZQVhDLFVBQVU7WUFLSCx3QkFBd0I7OztxQkFTOUIsS0FBSyxTQUFDLFNBQVM7K0JBNkJmLFlBQVksU0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUM7K0JBUXBDLFlBQVksU0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUM7NkJBb0JwQyxZQUFZLFNBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDOzs7O0lBekRuQyxvQ0FBbUQ7Ozs7O0lBRW5ELHdDQUEyQjs7Ozs7SUFDM0IscUNBQXFCOzs7OztJQUNyQixxQ0FBcUI7Ozs7O0lBRW5CLHdDQUE4Qjs7Ozs7SUFDOUIsOENBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBIb3N0TGlzdGVuZXIsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE9uRGVzdHJveVxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgR0ludGVybmFsUmVnaXN0cnlTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2ludGVybmFsLXJlZ2lzdHJ5LnNlcnZpY2VcIjtcbmltcG9ydCB7IERyYWdnYWJsZURpcmVjdGl2ZUNvbmZpZyB9IGZyb20gXCIuLi9tb2RlbHMvZHJhZ2dhYmxlLWRpcmVjdGl2ZS5jb25maWdcIjtcbmltcG9ydCB7IERyYWdEYXRhIH0gZnJvbSBcIi4uL21vZGVscy9kcmFnLWRhdGEubW9kZWxcIjtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiBcIltnRHJhZ2dhYmxlXVwiXG59KVxuZXhwb3J0IGNsYXNzIERyYWdnYWJsZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWlucHV0LXJlbmFtZVxuICBASW5wdXQoXCJnQ29uZmlnXCIpIGNvbmZpZzogRHJhZ2dhYmxlRGlyZWN0aXZlQ29uZmlnO1xuXG4gIHByaXZhdGUgcmVnaXN0ZXJlZCA9IGZhbHNlO1xuICBwcml2YXRlIG9mZnNldFg6IGFueTtcbiAgcHJpdmF0ZSBvZmZzZXRZOiBhbnk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGludGVybmFsUmVnaXN0cnk6IEdJbnRlcm5hbFJlZ2lzdHJ5U2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaW50ZXJuYWxSZWdpc3RyeS5yZWdpc3RlcldpZGdldCh0aGlzLmNvbmZpZykpIHtcbiAgICAgIHRoaXMucmVnaXN0ZXJlZCA9IHRydWU7XG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkcmFnZ2FibGVcIiwgXCJ0cnVlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBXaWRnZXQgaWQgJHt0aGlzLmNvbmZpZy53aWRnZXRJZH0gaXMgbm90IHVuaXF1ZWApO1xuICAgICAgdGhpcy5zaG93SW52YWxpZFdpZGdldCgpO1xuICAgIH1cbiAgfVxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmludGVybmFsUmVnaXN0cnkudW5SZWdpc3RlcldpZGdldCh0aGlzLmNvbmZpZy53aWRnZXRJZCk7XG4gIH1cbiAgc2hvd0ludmFsaWRXaWRnZXQoKSB7XG4gICAgY29uc3QgYm9yZGVyID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuYm9yZGVyO1xuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLmJvcmRlciA9IFwiMnB4IHNvbGlkIHJlZFwiO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuYm9yZGVyID0gYm9yZGVyO1xuICAgIH0sIDIwMDApO1xuICB9XG4gIEBIb3N0TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgW1wiJGV2ZW50XCJdKVxuICBtb3VzZURvd25IYW5kbGVyKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgaWYgKHRoaXMucmVnaXN0ZXJlZCkge1xuICAgICAgdGhpcy5vZmZzZXRYID0gZXZlbnQub2Zmc2V0WDtcbiAgICAgIHRoaXMub2Zmc2V0WSA9IGV2ZW50Lm9mZnNldFk7XG4gICAgICBjb25zb2xlLmxvZyhgeDogJHt0aGlzLm9mZnNldFh9LHkgOiAke3RoaXMub2Zmc2V0WX1gKTtcbiAgICB9XG4gIH1cbiAgQEhvc3RMaXN0ZW5lcihcImRyYWdzdGFydFwiLCBbXCIkZXZlbnRcIl0pXG4gIGRyYWdTdGFydEhhbmRsZXIoZXZlbnQ6IERyYWdFdmVudCkge1xuICAgIGlmICh0aGlzLnJlZ2lzdGVyZWQpIHtcbiAgICAgIGlmICh0aGlzLmNvbmZpZy5kcmFnSW1hZ2UgJiYgZmFsc2UpIHtcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoXG4gICAgICAgICAgdGhpcy5jb25maWcuY29tcG9uZW50V2lkdGgsXG4gICAgICAgICAgdGhpcy5jb25maWcuY29tcG9uZW50SGVpZ2h0XG4gICAgICAgICk7XG4gICAgICAgIGltYWdlLnNyYyA9IHRoaXMuY29uZmlnLmRyYWdJbWFnZTtcbiAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERyYWdJbWFnZShpbWFnZSwgMCwgMCk7XG4gICAgICB9XG4gICAgICBjb25zdCBldmVudElkID0gXCJkcmFnX1wiICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOTk5OTk5OSkgKyAxO1xuICAgICAgdGhpcy5pbnRlcm5hbFJlZ2lzdHJ5LmFkZERyYWdEYXRhKGV2ZW50SWQsIHtcbiAgICAgICAgb2Zmc2V0WDogdGhpcy5vZmZzZXRYLFxuICAgICAgICBvZmZzZXRZOiB0aGlzLm9mZnNldFksXG4gICAgICAgIHdpZGdldElkOiB0aGlzLmNvbmZpZy53aWRnZXRJZFxuICAgICAgfSk7XG4gICAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YShldmVudElkLCBldmVudElkKTtcbiAgICB9XG4gIH1cbiAgQEhvc3RMaXN0ZW5lcihcImRyYWdlbmRcIiwgW1wiJGV2ZW50XCJdKVxuICBkcmFnRW5kSGFuZGxlcihldmVudDogRHJhZ0V2ZW50KSB7fVxufVxuIl19