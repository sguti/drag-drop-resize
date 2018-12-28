/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostListener, ElementRef, Input } from "@angular/core";
import { GInternalRegistryService } from "../services/internal-registry.service";
import { DraggableDirectiveConfig } from "../models/draggable-directive.config";
var DraggableDirective = /** @class */ (function () {
    function DraggableDirective(elementRef, internalRegistry) {
        this.elementRef = elementRef;
        this.internalRegistry = internalRegistry;
        this.registered = false;
    }
    /**
     * @return {?}
     */
    DraggableDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.internalRegistry.registerWidget(this.config)) {
            this.registered = true;
            this.elementRef.nativeElement.setAttribute("draggable", "true");
        }
        else {
            console.error("Widget id " + this.config.widgetId + " is not unique");
            this.showInvalidWidget();
        }
    };
    /**
     * @return {?}
     */
    DraggableDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.internalRegistry.unRegisterWidget(this.config.widgetId);
    };
    /**
     * @return {?}
     */
    DraggableDirective.prototype.showInvalidWidget = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var border = this.elementRef.nativeElement.style.border;
        this.elementRef.nativeElement.style.border = "2px solid red";
        setTimeout(function () {
            _this.elementRef.nativeElement.style.border = border;
        }, 2000);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DraggableDirective.prototype.mouseDownHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.registered) {
            this.offsetX = event.offsetX;
            this.offsetY = event.offsetY;
            console.log("x: " + this.offsetX + ",y : " + this.offsetY);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DraggableDirective.prototype.dragStartHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.registered) {
            if (this.config.dragImage && false) {
                /** @type {?} */
                var image = new Image(this.config.componentWidth, this.config.componentHeight);
                image.src = this.config.dragImage;
                event.dataTransfer.setDragImage(image, 0, 0);
            }
            /** @type {?} */
            var eventId = "drag_" + Math.floor(Math.random() * 9999999) + 1;
            this.internalRegistry.addDragData(eventId, {
                offsetX: this.offsetX,
                offsetY: this.offsetY,
                widgetId: this.config.widgetId
            });
            event.dataTransfer.setData(eventId, eventId);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DraggableDirective.prototype.dragEndHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { };
    DraggableDirective.decorators = [
        { type: Directive, args: [{
                    selector: "[gDraggable]"
                },] }
    ];
    /** @nocollapse */
    DraggableDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: GInternalRegistryService }
    ]; };
    DraggableDirective.propDecorators = {
        config: [{ type: Input, args: ["gConfig",] }],
        mouseDownHandler: [{ type: HostListener, args: ["mousedown", ["$event"],] }],
        dragStartHandler: [{ type: HostListener, args: ["dragstart", ["$event"],] }],
        dragEndHandler: [{ type: HostListener, args: ["dragend", ["$event"],] }]
    };
    return DraggableDirective;
}());
export { DraggableDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2dhYmxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2RyYWd5LyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvZHJhZ2dhYmxlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUNWLEtBQUssRUFHTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNqRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUdoRjtJQVVFLDRCQUNVLFVBQXNCLEVBQ3RCLGdCQUEwQztRQUQxQyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBMEI7UUFMNUMsZUFBVSxHQUFHLEtBQUssQ0FBQztJQU14QixDQUFDOzs7O0lBRUoscUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNyRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztZQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ2pFO2FBQU07WUFDTCxPQUFPLENBQUMsS0FBSyxDQUFDLGVBQWEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLG1CQUFnQixDQUFDLENBQUM7WUFDakUsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7U0FDMUI7SUFDSCxDQUFDOzs7O0lBQ0Qsd0NBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDL0QsQ0FBQzs7OztJQUNELDhDQUFpQjs7O0lBQWpCO1FBQUEsaUJBTUM7O1lBTE8sTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxNQUFNO1FBQ3pELElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsZUFBZSxDQUFDO1FBQzdELFVBQVUsQ0FBQztZQUNULEtBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3RELENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNYLENBQUM7Ozs7O0lBRUQsNkNBQWdCOzs7O0lBRGhCLFVBQ2lCLEtBQWlCO1FBQ2hDLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7WUFDN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO1lBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBTSxJQUFJLENBQUMsT0FBTyxhQUFRLElBQUksQ0FBQyxPQUFTLENBQUMsQ0FBQztTQUN2RDtJQUNILENBQUM7Ozs7O0lBRUQsNkNBQWdCOzs7O0lBRGhCLFVBQ2lCLEtBQWdCO1FBQy9CLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxJQUFJLEtBQUssRUFBRTs7b0JBQzVCLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUM1QjtnQkFDRCxLQUFLLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO2dCQUNsQyxLQUFLLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQzlDOztnQkFDSyxPQUFPLEdBQUcsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUM7WUFDakUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUU7Z0JBQ3pDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztnQkFDckIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO2dCQUNyQixRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRO2FBQy9CLENBQUMsQ0FBQztZQUNILEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztTQUM5QztJQUNILENBQUM7Ozs7O0lBRUQsMkNBQWM7Ozs7SUFEZCxVQUNlLEtBQWdCLElBQUcsQ0FBQzs7Z0JBL0RwQyxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7aUJBQ3pCOzs7O2dCQVhDLFVBQVU7Z0JBS0gsd0JBQXdCOzs7eUJBUzlCLEtBQUssU0FBQyxTQUFTO21DQTZCZixZQUFZLFNBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDO21DQVFwQyxZQUFZLFNBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDO2lDQW9CcEMsWUFBWSxTQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7SUFFckMseUJBQUM7Q0FBQSxBQWhFRCxJQWdFQztTQTdEWSxrQkFBa0I7OztJQUU3QixvQ0FBbUQ7Ozs7O0lBRW5ELHdDQUEyQjs7Ozs7SUFDM0IscUNBQXFCOzs7OztJQUNyQixxQ0FBcUI7Ozs7O0lBRW5CLHdDQUE4Qjs7Ozs7SUFDOUIsOENBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBIb3N0TGlzdGVuZXIsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE9uRGVzdHJveVxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgR0ludGVybmFsUmVnaXN0cnlTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2ludGVybmFsLXJlZ2lzdHJ5LnNlcnZpY2VcIjtcbmltcG9ydCB7IERyYWdnYWJsZURpcmVjdGl2ZUNvbmZpZyB9IGZyb20gXCIuLi9tb2RlbHMvZHJhZ2dhYmxlLWRpcmVjdGl2ZS5jb25maWdcIjtcbmltcG9ydCB7IERyYWdEYXRhIH0gZnJvbSBcIi4uL21vZGVscy9kcmFnLWRhdGEubW9kZWxcIjtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiBcIltnRHJhZ2dhYmxlXVwiXG59KVxuZXhwb3J0IGNsYXNzIERyYWdnYWJsZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWlucHV0LXJlbmFtZVxuICBASW5wdXQoXCJnQ29uZmlnXCIpIGNvbmZpZzogRHJhZ2dhYmxlRGlyZWN0aXZlQ29uZmlnO1xuXG4gIHByaXZhdGUgcmVnaXN0ZXJlZCA9IGZhbHNlO1xuICBwcml2YXRlIG9mZnNldFg6IGFueTtcbiAgcHJpdmF0ZSBvZmZzZXRZOiBhbnk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGludGVybmFsUmVnaXN0cnk6IEdJbnRlcm5hbFJlZ2lzdHJ5U2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaW50ZXJuYWxSZWdpc3RyeS5yZWdpc3RlcldpZGdldCh0aGlzLmNvbmZpZykpIHtcbiAgICAgIHRoaXMucmVnaXN0ZXJlZCA9IHRydWU7XG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkcmFnZ2FibGVcIiwgXCJ0cnVlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBXaWRnZXQgaWQgJHt0aGlzLmNvbmZpZy53aWRnZXRJZH0gaXMgbm90IHVuaXF1ZWApO1xuICAgICAgdGhpcy5zaG93SW52YWxpZFdpZGdldCgpO1xuICAgIH1cbiAgfVxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmludGVybmFsUmVnaXN0cnkudW5SZWdpc3RlcldpZGdldCh0aGlzLmNvbmZpZy53aWRnZXRJZCk7XG4gIH1cbiAgc2hvd0ludmFsaWRXaWRnZXQoKSB7XG4gICAgY29uc3QgYm9yZGVyID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuYm9yZGVyO1xuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLmJvcmRlciA9IFwiMnB4IHNvbGlkIHJlZFwiO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuYm9yZGVyID0gYm9yZGVyO1xuICAgIH0sIDIwMDApO1xuICB9XG4gIEBIb3N0TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgW1wiJGV2ZW50XCJdKVxuICBtb3VzZURvd25IYW5kbGVyKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgaWYgKHRoaXMucmVnaXN0ZXJlZCkge1xuICAgICAgdGhpcy5vZmZzZXRYID0gZXZlbnQub2Zmc2V0WDtcbiAgICAgIHRoaXMub2Zmc2V0WSA9IGV2ZW50Lm9mZnNldFk7XG4gICAgICBjb25zb2xlLmxvZyhgeDogJHt0aGlzLm9mZnNldFh9LHkgOiAke3RoaXMub2Zmc2V0WX1gKTtcbiAgICB9XG4gIH1cbiAgQEhvc3RMaXN0ZW5lcihcImRyYWdzdGFydFwiLCBbXCIkZXZlbnRcIl0pXG4gIGRyYWdTdGFydEhhbmRsZXIoZXZlbnQ6IERyYWdFdmVudCkge1xuICAgIGlmICh0aGlzLnJlZ2lzdGVyZWQpIHtcbiAgICAgIGlmICh0aGlzLmNvbmZpZy5kcmFnSW1hZ2UgJiYgZmFsc2UpIHtcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoXG4gICAgICAgICAgdGhpcy5jb25maWcuY29tcG9uZW50V2lkdGgsXG4gICAgICAgICAgdGhpcy5jb25maWcuY29tcG9uZW50SGVpZ2h0XG4gICAgICAgICk7XG4gICAgICAgIGltYWdlLnNyYyA9IHRoaXMuY29uZmlnLmRyYWdJbWFnZTtcbiAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERyYWdJbWFnZShpbWFnZSwgMCwgMCk7XG4gICAgICB9XG4gICAgICBjb25zdCBldmVudElkID0gXCJkcmFnX1wiICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOTk5OTk5OSkgKyAxO1xuICAgICAgdGhpcy5pbnRlcm5hbFJlZ2lzdHJ5LmFkZERyYWdEYXRhKGV2ZW50SWQsIHtcbiAgICAgICAgb2Zmc2V0WDogdGhpcy5vZmZzZXRYLFxuICAgICAgICBvZmZzZXRZOiB0aGlzLm9mZnNldFksXG4gICAgICAgIHdpZGdldElkOiB0aGlzLmNvbmZpZy53aWRnZXRJZFxuICAgICAgfSk7XG4gICAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YShldmVudElkLCBldmVudElkKTtcbiAgICB9XG4gIH1cbiAgQEhvc3RMaXN0ZW5lcihcImRyYWdlbmRcIiwgW1wiJGV2ZW50XCJdKVxuICBkcmFnRW5kSGFuZGxlcihldmVudDogRHJhZ0V2ZW50KSB7fVxufVxuIl19