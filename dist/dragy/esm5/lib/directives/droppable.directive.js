/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostListener, ElementRef, Output, EventEmitter, Renderer2 } from "@angular/core";
import { GInternalRegistryService } from "../services/internal-registry.service";
import { fromEvent, timer } from "rxjs";
import { debounce, takeWhile, distinctUntilChanged, tap } from "rxjs/operators";
var DroppableDirective = /** @class */ (function () {
    function DroppableDirective(elementRef, renderer, internalRegistry) {
        var _this = this;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.internalRegistry = internalRegistry;
        this.isAlive = true;
        this.validDropTarget = true;
        this.dropsuccess = new EventEmitter();
        this.dragOverHandler = function (event) {
            event.preventDefault();
            console.log(event);
            /** @type {?} */
            var react = ((/** @type {?} */ (_this.elementRef
                .nativeElement))).getBoundingClientRect();
            /** @type {?} */
            var dropItemStartX = event.clientX - react.left - _this._current.dragData.offsetX;
            /** @type {?} */
            var dropItemEndX = dropItemStartX + _this._current.config.componentWidth;
            /** @type {?} */
            var dropItemStartY = event.clientY - react.top - _this._current.dragData.offsetY;
            /** @type {?} */
            var dropItemEndY = dropItemStartY + _this._current.config.componentHeight;
            _this.validDropTarget = !_this.internalRegistry
                .getAllViewContainerItem()
                .some(function (registryItem) {
                return (registryItem.startX < dropItemEndX &&
                    registryItem.endX > dropItemStartX &&
                    registryItem.startY < dropItemEndY &&
                    registryItem.endY > dropItemStartY);
            });
            _this._tempDropLocation.style.top = dropItemStartY + "px";
            _this._tempDropLocation.style.left = dropItemStartX + "px";
            // tslint:disable-next-line:semicolon
            _this._tempDropLocation.style.borderColor = _this.validDropTarget
                ? "Green"
                : "Red";
        };
    }
    /**
     * @return {?}
     */
    DroppableDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._tempDropLocation = document.createElement("div");
        this._tempDropLocation.style.border = "2px dashed green";
        this._tempDropLocation.style.position = "absolute";
        fromEvent(this.elementRef.nativeElement, "dragover")
            .pipe(takeWhile(function () { return _this.isAlive; }), tap(function (event) { return event.preventDefault(); }), distinctUntilChanged(function (event1, event2) {
            return (event1.clientX === event2.clientX &&
                event1.clientY === event2.clientY);
        }), debounce(function () { return timer(100); }))
            .subscribe(this.dragOverHandler);
    };
    /**
     * @return {?}
     */
    DroppableDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.isAlive = false;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DroppableDirective.prototype.dragEnterHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.dataTransfer.dropEffect = "move";
        /** @type {?} */
        var eventId = event.dataTransfer.types[0];
        /** @type {?} */
        var dragData = this.internalRegistry.getDragData(eventId);
        /** @type {?} */
        var config = this.internalRegistry.getWidgetConfig(dragData.widgetId);
        this._current = {
            eventId: event.dataTransfer.types[0],
            dragData: this.internalRegistry.getDragData(eventId),
            config: this.internalRegistry.getWidgetConfig(dragData.widgetId)
        };
        this._tempDropLocation.style.height = config.componentHeight + "px";
        this._tempDropLocation.style.width = config.componentWidth + "px";
        this.renderer.appendChild(this.elementRef.nativeElement, this._tempDropLocation);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DroppableDirective.prototype.dragLeaveHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        console.log("drag leave");
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DroppableDirective.prototype.dropHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        if (this.validDropTarget) {
            /** @type {?} */
            var dropSuccessEvent = {
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
        this.renderer.removeChild(this.elementRef.nativeElement, this._tempDropLocation);
    };
    DroppableDirective.decorators = [
        { type: Directive, args: [{
                    selector: "[gDroppable]"
                },] }
    ];
    /** @nocollapse */
    DroppableDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: GInternalRegistryService }
    ]; };
    DroppableDirective.propDecorators = {
        dropsuccess: [{ type: Output }],
        dragEnterHandler: [{ type: HostListener, args: ["dragenter", ["$event"],] }],
        dragLeaveHandler: [{ type: HostListener, args: ["dragleave", ["$event"],] }],
        dropHandler: [{ type: HostListener, args: ["drop", ["$event"],] }]
    };
    return DroppableDirective;
}());
export { DroppableDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DroppableDirective.prototype.isAlive;
    /**
     * @type {?}
     * @private
     */
    DroppableDirective.prototype._tempDropLocation;
    /**
     * @type {?}
     * @private
     */
    DroppableDirective.prototype.validDropTarget;
    /**
     * @type {?}
     * @private
     */
    DroppableDirective.prototype._current;
    /** @type {?} */
    DroppableDirective.prototype.dropsuccess;
    /** @type {?} */
    DroppableDirective.prototype.dragOverHandler;
    /**
     * @type {?}
     * @private
     */
    DroppableDirective.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    DroppableDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    DroppableDirective.prototype.internalRegistry;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcHBhYmxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2RyYWd5LyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvZHJvcHBhYmxlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUNWLE1BQU0sRUFDTixZQUFZLEVBRVosU0FBUyxFQUVWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBR2pGLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLG9CQUFvQixFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWhGO0lBSUUsNEJBQ1UsVUFBc0IsRUFDdEIsUUFBbUIsRUFDbkIsZ0JBQTBDO1FBSHBELGlCQUlJO1FBSE0sZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBMEI7UUFFNUMsWUFBTyxHQUFHLElBQUksQ0FBQztRQUVmLG9CQUFlLEdBQUcsSUFBSSxDQUFDO1FBTXJCLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQTZCLENBQUM7UUEwQ3RFLG9CQUFlLEdBQUcsVUFBQyxLQUFnQjtZQUNqQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7Z0JBQ2IsS0FBSyxHQUFHLENBQUMsbUJBQUEsS0FBSSxDQUFDLFVBQVU7aUJBQzNCLGFBQWEsRUFBZSxDQUFDLENBQUMscUJBQXFCLEVBQUU7O2dCQUVsRCxjQUFjLEdBQ2xCLEtBQUssQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLElBQUksR0FBRyxLQUFJLENBQUMsUUFB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QyxRQUFRO2dCQUN2QyxLQUFLLEVBQUU7b0JBQ0wsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLFFBQVEsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQztvQkFDNUQsU0FBUyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDO2lCQUMvRDthQUNGO1lBRUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztTQUN6QztRQUNELElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFDN0IsSUFBSSxDQUFDLGlCQUFpQixDQUN2QixDQUFDO0lBQ0osQ0FBQzs7Z0JBbkhGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztpQkFDekI7Ozs7Z0JBaEJDLFVBQVU7Z0JBSVYsU0FBUztnQkFJRix3QkFBd0I7Ozs4QkF1QjlCLE1BQU07bUNBdUJOLFlBQVksU0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUM7bUNBaURwQyxZQUFZLFNBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDOzhCQUlwQyxZQUFZLFNBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDOztJQXVCbEMseUJBQUM7Q0FBQSxBQXBIRCxJQW9IQztTQWpIWSxrQkFBa0I7Ozs7OztJQU03QixxQ0FBdUI7Ozs7O0lBQ3ZCLCtDQUF1Qzs7Ozs7SUFDdkMsNkNBQStCOzs7OztJQUMvQixzQ0FJRTs7SUFDRix5Q0FBc0U7O0lBMEN0RSw2Q0E0QkU7Ozs7O0lBbEZBLHdDQUE4Qjs7Ozs7SUFDOUIsc0NBQTJCOzs7OztJQUMzQiw4Q0FBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEhvc3RMaXN0ZW5lcixcbiAgRWxlbWVudFJlZixcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyLFxuICBPbkRlc3Ryb3lcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IERyb3BTdWNjZXNzU3ludGhldGljRXZlbnQgfSBmcm9tIFwiLi4vbW9kZWxzL2Ryb3Atc3VjY2Vzcy1zeW50aGV0aWMtZXZlbnRcIjtcbmltcG9ydCB7IEdJbnRlcm5hbFJlZ2lzdHJ5U2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9pbnRlcm5hbC1yZWdpc3RyeS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBEcmFnZ2FibGVEaXJlY3RpdmVDb25maWcgfSBmcm9tIFwiLi4vbW9kZWxzL2RyYWdnYWJsZS1kaXJlY3RpdmUuY29uZmlnXCI7XG5pbXBvcnQgeyBEcmFnRGF0YSB9IGZyb20gXCIuLi9tb2RlbHMvZHJhZy1kYXRhLm1vZGVsXCI7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIHRpbWVyIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IGRlYm91bmNlLCB0YWtlV2hpbGUsIGRpc3RpbmN0VW50aWxDaGFuZ2VkLCB0YXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiBcIltnRHJvcHBhYmxlXVwiXG59KVxuZXhwb3J0IGNsYXNzIERyb3BwYWJsZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGludGVybmFsUmVnaXN0cnk6IEdJbnRlcm5hbFJlZ2lzdHJ5U2VydmljZVxuICApIHt9XG4gIHByaXZhdGUgaXNBbGl2ZSA9IHRydWU7XG4gIHByaXZhdGUgX3RlbXBEcm9wTG9jYXRpb246IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIHZhbGlkRHJvcFRhcmdldCA9IHRydWU7XG4gIHByaXZhdGUgX2N1cnJlbnQ6IHtcbiAgICBldmVudElkOiBzdHJpbmc7XG4gICAgZHJhZ0RhdGE6IERyYWdEYXRhO1xuICAgIGNvbmZpZzogRHJhZ2dhYmxlRGlyZWN0aXZlQ29uZmlnO1xuICB9O1xuICBAT3V0cHV0KCkgZHJvcHN1Y2Nlc3MgPSBuZXcgRXZlbnRFbWl0dGVyPERyb3BTdWNjZXNzU3ludGhldGljRXZlbnQ+KCk7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fdGVtcERyb3BMb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGhpcy5fdGVtcERyb3BMb2NhdGlvbi5zdHlsZS5ib3JkZXIgPSBcIjJweCBkYXNoZWQgZ3JlZW5cIjtcbiAgICB0aGlzLl90ZW1wRHJvcExvY2F0aW9uLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgIGZyb21FdmVudCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgXCJkcmFnb3ZlclwiKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRha2VXaGlsZSgoKSA9PiB0aGlzLmlzQWxpdmUpLFxuICAgICAgICB0YXAoKGV2ZW50OiBEcmFnRXZlbnQpID0+IGV2ZW50LnByZXZlbnREZWZhdWx0KCkpLFxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgoZXZlbnQxOiBEcmFnRXZlbnQsIGV2ZW50MjogRHJhZ0V2ZW50KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIGV2ZW50MS5jbGllbnRYID09PSBldmVudDIuY2xpZW50WCAmJlxuICAgICAgICAgICAgZXZlbnQxLmNsaWVudFkgPT09IGV2ZW50Mi5jbGllbnRZXG4gICAgICAgICAgKTtcbiAgICAgICAgfSksXG4gICAgICAgIGRlYm91bmNlKCgpID0+IHRpbWVyKDEwMCkpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKHRoaXMuZHJhZ092ZXJIYW5kbGVyKTtcbiAgfVxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmlzQWxpdmUgPSBmYWxzZTtcbiAgfVxuICBASG9zdExpc3RlbmVyKFwiZHJhZ2VudGVyXCIsIFtcIiRldmVudFwiXSlcbiAgZHJhZ0VudGVySGFuZGxlcihldmVudDogRHJhZ0V2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IFwibW92ZVwiO1xuICAgIGNvbnN0IGV2ZW50SWQgPSBldmVudC5kYXRhVHJhbnNmZXIudHlwZXNbMF07XG4gICAgY29uc3QgZHJhZ0RhdGEgPSB0aGlzLmludGVybmFsUmVnaXN0cnkuZ2V0RHJhZ0RhdGEoZXZlbnRJZCk7XG4gICAgY29uc3QgY29uZmlnID0gdGhpcy5pbnRlcm5hbFJlZ2lzdHJ5LmdldFdpZGdldENvbmZpZyhkcmFnRGF0YS53aWRnZXRJZCk7XG4gICAgdGhpcy5fY3VycmVudCA9IHtcbiAgICAgIGV2ZW50SWQ6IGV2ZW50LmRhdGFUcmFuc2Zlci50eXBlc1swXSxcbiAgICAgIGRyYWdEYXRhOiB0aGlzLmludGVybmFsUmVnaXN0cnkuZ2V0RHJhZ0RhdGEoZXZlbnRJZCksXG4gICAgICBjb25maWc6IHRoaXMuaW50ZXJuYWxSZWdpc3RyeS5nZXRXaWRnZXRDb25maWcoZHJhZ0RhdGEud2lkZ2V0SWQpXG4gICAgfTtcbiAgICB0aGlzLl90ZW1wRHJvcExvY2F0aW9uLnN0eWxlLmhlaWdodCA9IGNvbmZpZy5jb21wb25lbnRIZWlnaHQgKyBcInB4XCI7XG4gICAgdGhpcy5fdGVtcERyb3BMb2NhdGlvbi5zdHlsZS53aWR0aCA9IGNvbmZpZy5jb21wb25lbnRXaWR0aCArIFwicHhcIjtcbiAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKFxuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXG4gICAgICB0aGlzLl90ZW1wRHJvcExvY2F0aW9uXG4gICAgKTtcbiAgfVxuICBkcmFnT3ZlckhhbmRsZXIgPSAoZXZlbnQ6IERyYWdFdmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc29sZS5sb2coZXZlbnQpO1xuICAgIGNvbnN0IHJlYWN0ID0gKHRoaXMuZWxlbWVudFJlZlxuICAgICAgLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgY29uc3QgZHJvcEl0ZW1TdGFydFggPVxuICAgICAgZXZlbnQuY2xpZW50WCAtIHJlYWN0LmxlZnQgLSB0aGlzLl9jdXJyZW50LmRyYWdEYXRhLm9mZnNldFg7XG4gICAgY29uc3QgZHJvcEl0ZW1FbmRYID0gZHJvcEl0ZW1TdGFydFggKyB0aGlzLl9jdXJyZW50LmNvbmZpZy5jb21wb25lbnRXaWR0aDtcbiAgICBjb25zdCBkcm9wSXRlbVN0YXJ0WSA9XG4gICAgICBldmVudC5jbGllbnRZIC0gcmVhY3QudG9wIC0gdGhpcy5fY3VycmVudC5kcmFnRGF0YS5vZmZzZXRZO1xuICAgIGNvbnN0IGRyb3BJdGVtRW5kWSA9IGRyb3BJdGVtU3RhcnRZICsgdGhpcy5fY3VycmVudC5jb25maWcuY29tcG9uZW50SGVpZ2h0O1xuICAgIHRoaXMudmFsaWREcm9wVGFyZ2V0ID0gIXRoaXMuaW50ZXJuYWxSZWdpc3RyeVxuICAgICAgLmdldEFsbFZpZXdDb250YWluZXJJdGVtKClcbiAgICAgIC5zb21lKHJlZ2lzdHJ5SXRlbSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgcmVnaXN0cnlJdGVtLnN0YXJ0WCA8IGRyb3BJdGVtRW5kWCAmJlxuICAgICAgICAgIHJlZ2lzdHJ5SXRlbS5lbmRYID4gZHJvcEl0ZW1TdGFydFggJiZcbiAgICAgICAgICByZWdpc3RyeUl0ZW0uc3RhcnRZIDwgZHJvcEl0ZW1FbmRZICYmXG4gICAgICAgICAgcmVnaXN0cnlJdGVtLmVuZFkgPiBkcm9wSXRlbVN0YXJ0WVxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgdGhpcy5fdGVtcERyb3BMb2NhdGlvbi5zdHlsZS50b3AgPSBkcm9wSXRlbVN0YXJ0WSArIFwicHhcIjtcbiAgICB0aGlzLl90ZW1wRHJvcExvY2F0aW9uLnN0eWxlLmxlZnQgPSBkcm9wSXRlbVN0YXJ0WCArIFwicHhcIjtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6c2VtaWNvbG9uXG4gICAgdGhpcy5fdGVtcERyb3BMb2NhdGlvbi5zdHlsZS5ib3JkZXJDb2xvciA9IHRoaXMudmFsaWREcm9wVGFyZ2V0XG4gICAgICA/IFwiR3JlZW5cIlxuICAgICAgOiBcIlJlZFwiO1xuICB9O1xuXG4gIEBIb3N0TGlzdGVuZXIoXCJkcmFnbGVhdmVcIiwgW1wiJGV2ZW50XCJdKVxuICBkcmFnTGVhdmVIYW5kbGVyKGV2ZW50OiBEcmFnRXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZyhcImRyYWcgbGVhdmVcIik7XG4gIH1cbiAgQEhvc3RMaXN0ZW5lcihcImRyb3BcIiwgW1wiJGV2ZW50XCJdKVxuICBkcm9wSGFuZGxlcihldmVudDogRHJhZ0V2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAodGhpcy52YWxpZERyb3BUYXJnZXQpIHtcbiAgICAgIGNvbnN0IGRyb3BTdWNjZXNzRXZlbnQ6IERyb3BTdWNjZXNzU3ludGhldGljRXZlbnQgPSB7XG4gICAgICAgIGV2ZW50OiBldmVudCxcbiAgICAgICAgY29tcG9uZW50TmFtZTogdGhpcy5fY3VycmVudC5jb25maWcuY29tcG9uZW50TmFtZSxcbiAgICAgICAgZHJhZ1NvdXJjZVNlbGVjdG9yOiB0aGlzLl9jdXJyZW50LmNvbmZpZy53aWRnZXRJZCxcbiAgICAgICAgd2lkZ2V0SWQ6IHRoaXMuX2N1cnJlbnQuY29uZmlnLndpZGdldElkLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgXCJ0b3AucHhcIjogdGhpcy5fdGVtcERyb3BMb2NhdGlvbi5zdHlsZS50b3AucmVwbGFjZSgvcHgvLCBcIlwiKSxcbiAgICAgICAgICBcImxlZnQucHhcIjogdGhpcy5fdGVtcERyb3BMb2NhdGlvbi5zdHlsZS5sZWZ0LnJlcGxhY2UoL3B4LywgXCJcIilcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgdGhpcy5kcm9wc3VjY2Vzcy5lbWl0KGRyb3BTdWNjZXNzRXZlbnQpO1xuICAgIH1cbiAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNoaWxkKFxuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXG4gICAgICB0aGlzLl90ZW1wRHJvcExvY2F0aW9uXG4gICAgKTtcbiAgfVxufVxuIl19