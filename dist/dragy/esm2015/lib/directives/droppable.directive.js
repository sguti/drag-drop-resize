/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostListener, ElementRef, Output, EventEmitter, Renderer2 } from "@angular/core";
import { GInternalRegistryService } from "../services/internal-registry.service";
import { fromEvent, timer } from "rxjs";
import { debounce, takeWhile, distinctUntilChanged, tap } from "rxjs/operators";
export class DroppableDirective {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} internalRegistry
     */
    constructor(elementRef, renderer, internalRegistry) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.internalRegistry = internalRegistry;
        this.isAlive = true;
        this.validDropTarget = true;
        this.dropsuccess = new EventEmitter();
        this.dragOverHandler = (event) => {
            event.preventDefault();
            console.log(event);
            /** @type {?} */
            const react = ((/** @type {?} */ (this.elementRef
                .nativeElement))).getBoundingClientRect();
            /** @type {?} */
            const dropItemStartX = event.clientX - react.left - this._current.dragData.offsetX;
            /** @type {?} */
            const dropItemEndX = dropItemStartX + this._current.config.componentWidth;
            /** @type {?} */
            const dropItemStartY = event.clientY - react.top - this._current.dragData.offsetY;
            /** @type {?} */
            const dropItemEndY = dropItemStartY + this._current.config.componentHeight;
            this.validDropTarget = !this.internalRegistry
                .getAllViewContainerItem()
                .some(registryItem => {
                return (registryItem.startX < dropItemEndX &&
                    registryItem.endX > dropItemStartX &&
                    registryItem.startY < dropItemEndY &&
                    registryItem.endY > dropItemStartY);
            });
            this._tempDropLocation.style.top = dropItemStartY + "px";
            this._tempDropLocation.style.left = dropItemStartX + "px";
            // tslint:disable-next-line:semicolon
            this._tempDropLocation.style.borderColor = this.validDropTarget
                ? "Green"
                : "Red";
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._tempDropLocation = document.createElement("div");
        this._tempDropLocation.style.border = "2px dashed green";
        this._tempDropLocation.style.position = "absolute";
        fromEvent(this.elementRef.nativeElement, "dragover")
            .pipe(takeWhile(() => this.isAlive), tap((event) => event.preventDefault()), distinctUntilChanged((event1, event2) => {
            return (event1.clientX === event2.clientX &&
                event1.clientY === event2.clientY);
        }), debounce(() => timer(100)))
            .subscribe(this.dragOverHandler);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.isAlive = false;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    dragEnterHandler(event) {
        event.preventDefault();
        event.dataTransfer.dropEffect = "move";
        /** @type {?} */
        const eventId = event.dataTransfer.types[0];
        /** @type {?} */
        const dragData = this.internalRegistry.getDragData(eventId);
        /** @type {?} */
        const config = this.internalRegistry.getWidgetConfig(dragData.widgetId);
        this._current = {
            eventId: event.dataTransfer.types[0],
            dragData: this.internalRegistry.getDragData(eventId),
            config: this.internalRegistry.getWidgetConfig(dragData.widgetId)
        };
        this._tempDropLocation.style.height = config.componentHeight + "px";
        this._tempDropLocation.style.width = config.componentWidth + "px";
        this.renderer.appendChild(this.elementRef.nativeElement, this._tempDropLocation);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    dragLeaveHandler(event) {
        console.log("drag leave");
    }
    /**
     * @param {?} event
     * @return {?}
     */
    dropHandler(event) {
        event.preventDefault();
        if (this.validDropTarget) {
            /** @type {?} */
            const dropSuccessEvent = {
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
    }
}
DroppableDirective.decorators = [
    { type: Directive, args: [{
                selector: "[gDroppable]"
            },] }
];
/** @nocollapse */
DroppableDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: GInternalRegistryService }
];
DroppableDirective.propDecorators = {
    dropsuccess: [{ type: Output }],
    dragEnterHandler: [{ type: HostListener, args: ["dragenter", ["$event"],] }],
    dragLeaveHandler: [{ type: HostListener, args: ["dragleave", ["$event"],] }],
    dropHandler: [{ type: HostListener, args: ["drop", ["$event"],] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcHBhYmxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2RyYWd5LyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvZHJvcHBhYmxlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUNWLE1BQU0sRUFDTixZQUFZLEVBRVosU0FBUyxFQUVWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBR2pGLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLG9CQUFvQixFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBS2hGLE1BQU0sT0FBTyxrQkFBa0I7Ozs7OztJQUM3QixZQUNVLFVBQXNCLEVBQ3RCLFFBQW1CLEVBQ25CLGdCQUEwQztRQUYxQyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUEwQjtRQUU1QyxZQUFPLEdBQUcsSUFBSSxDQUFDO1FBRWYsb0JBQWUsR0FBRyxJQUFJLENBQUM7UUFNckIsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBNkIsQ0FBQztRQTBDdEUsb0JBQWUsR0FBRyxDQUFDLEtBQWdCLEVBQUUsRUFBRTtZQUNyQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7a0JBQ2IsS0FBSyxHQUFHLENBQUMsbUJBQUEsSUFBSSxDQUFDLFVBQVU7aUJBQzNCLGFBQWEsRUFBZSxDQUFDLENBQUMscUJBQXFCLEVBQUU7O2tCQUVsRCxjQUFjLEdBQ2xCLEtBQUssQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLElB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LFVBQVU7b0JBQ3BCLFFBQVEsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQztvQkFDNUQsU0FBUyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDO2lCQUMvRDthQUNGO1lBRUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztTQUN6QztRQUNELElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFDN0IsSUFBSSxDQUFDLGlCQUFpQixDQUN2QixDQUFDO0lBQ0osQ0FBQzs7O1lBbkhGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYzthQUN6Qjs7OztZQWhCQyxVQUFVO1lBSVYsU0FBUztZQUlGLHdCQUF3Qjs7OzBCQXVCOUIsTUFBTTsrQkF1Qk4sWUFBWSxTQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQzsrQkFpRHBDLFlBQVksU0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUM7MEJBSXBDLFlBQVksU0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7Ozs7SUFwRmhDLHFDQUF1Qjs7Ozs7SUFDdkIsK0NBQXVDOzs7OztJQUN2Qyw2Q0FBK0I7Ozs7O0lBQy9CLHNDQUlFOztJQUNGLHlDQUFzRTs7SUEwQ3RFLDZDQTRCRTs7Ozs7SUFsRkEsd0NBQThCOzs7OztJQUM5QixzQ0FBMkI7Ozs7O0lBQzNCLDhDQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgSG9zdExpc3RlbmVyLFxuICBFbGVtZW50UmVmLFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG4gIE9uRGVzdHJveVxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRHJvcFN1Y2Nlc3NTeW50aGV0aWNFdmVudCB9IGZyb20gXCIuLi9tb2RlbHMvZHJvcC1zdWNjZXNzLXN5bnRoZXRpYy1ldmVudFwiO1xuaW1wb3J0IHsgR0ludGVybmFsUmVnaXN0cnlTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2ludGVybmFsLXJlZ2lzdHJ5LnNlcnZpY2VcIjtcbmltcG9ydCB7IERyYWdnYWJsZURpcmVjdGl2ZUNvbmZpZyB9IGZyb20gXCIuLi9tb2RlbHMvZHJhZ2dhYmxlLWRpcmVjdGl2ZS5jb25maWdcIjtcbmltcG9ydCB7IERyYWdEYXRhIH0gZnJvbSBcIi4uL21vZGVscy9kcmFnLWRhdGEubW9kZWxcIjtcbmltcG9ydCB7IGZyb21FdmVudCwgdGltZXIgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgZGVib3VuY2UsIHRha2VXaGlsZSwgZGlzdGluY3RVbnRpbENoYW5nZWQsIHRhcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6IFwiW2dEcm9wcGFibGVdXCJcbn0pXG5leHBvcnQgY2xhc3MgRHJvcHBhYmxlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgaW50ZXJuYWxSZWdpc3RyeTogR0ludGVybmFsUmVnaXN0cnlTZXJ2aWNlXG4gICkge31cbiAgcHJpdmF0ZSBpc0FsaXZlID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfdGVtcERyb3BMb2NhdGlvbjogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgdmFsaWREcm9wVGFyZ2V0ID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfY3VycmVudDoge1xuICAgIGV2ZW50SWQ6IHN0cmluZztcbiAgICBkcmFnRGF0YTogRHJhZ0RhdGE7XG4gICAgY29uZmlnOiBEcmFnZ2FibGVEaXJlY3RpdmVDb25maWc7XG4gIH07XG4gIEBPdXRwdXQoKSBkcm9wc3VjY2VzcyA9IG5ldyBFdmVudEVtaXR0ZXI8RHJvcFN1Y2Nlc3NTeW50aGV0aWNFdmVudD4oKTtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl90ZW1wRHJvcExvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aGlzLl90ZW1wRHJvcExvY2F0aW9uLnN0eWxlLmJvcmRlciA9IFwiMnB4IGRhc2hlZCBncmVlblwiO1xuICAgIHRoaXMuX3RlbXBEcm9wTG9jYXRpb24uc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgZnJvbUV2ZW50KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBcImRyYWdvdmVyXCIpXG4gICAgICAucGlwZShcbiAgICAgICAgdGFrZVdoaWxlKCgpID0+IHRoaXMuaXNBbGl2ZSksXG4gICAgICAgIHRhcCgoZXZlbnQ6IERyYWdFdmVudCkgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKSksXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKChldmVudDE6IERyYWdFdmVudCwgZXZlbnQyOiBEcmFnRXZlbnQpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgZXZlbnQxLmNsaWVudFggPT09IGV2ZW50Mi5jbGllbnRYICYmXG4gICAgICAgICAgICBldmVudDEuY2xpZW50WSA9PT0gZXZlbnQyLmNsaWVudFlcbiAgICAgICAgICApO1xuICAgICAgICB9KSxcbiAgICAgICAgZGVib3VuY2UoKCkgPT4gdGltZXIoMTAwKSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUodGhpcy5kcmFnT3ZlckhhbmRsZXIpO1xuICB9XG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuaXNBbGl2ZSA9IGZhbHNlO1xuICB9XG4gIEBIb3N0TGlzdGVuZXIoXCJkcmFnZW50ZXJcIiwgW1wiJGV2ZW50XCJdKVxuICBkcmFnRW50ZXJIYW5kbGVyKGV2ZW50OiBEcmFnRXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gXCJtb3ZlXCI7XG4gICAgY29uc3QgZXZlbnRJZCA9IGV2ZW50LmRhdGFUcmFuc2Zlci50eXBlc1swXTtcbiAgICBjb25zdCBkcmFnRGF0YSA9IHRoaXMuaW50ZXJuYWxSZWdpc3RyeS5nZXREcmFnRGF0YShldmVudElkKTtcbiAgICBjb25zdCBjb25maWcgPSB0aGlzLmludGVybmFsUmVnaXN0cnkuZ2V0V2lkZ2V0Q29uZmlnKGRyYWdEYXRhLndpZGdldElkKTtcbiAgICB0aGlzLl9jdXJyZW50ID0ge1xuICAgICAgZXZlbnRJZDogZXZlbnQuZGF0YVRyYW5zZmVyLnR5cGVzWzBdLFxuICAgICAgZHJhZ0RhdGE6IHRoaXMuaW50ZXJuYWxSZWdpc3RyeS5nZXREcmFnRGF0YShldmVudElkKSxcbiAgICAgIGNvbmZpZzogdGhpcy5pbnRlcm5hbFJlZ2lzdHJ5LmdldFdpZGdldENvbmZpZyhkcmFnRGF0YS53aWRnZXRJZClcbiAgICB9O1xuICAgIHRoaXMuX3RlbXBEcm9wTG9jYXRpb24uc3R5bGUuaGVpZ2h0ID0gY29uZmlnLmNvbXBvbmVudEhlaWdodCArIFwicHhcIjtcbiAgICB0aGlzLl90ZW1wRHJvcExvY2F0aW9uLnN0eWxlLndpZHRoID0gY29uZmlnLmNvbXBvbmVudFdpZHRoICsgXCJweFwiO1xuICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQoXG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcbiAgICAgIHRoaXMuX3RlbXBEcm9wTG9jYXRpb25cbiAgICApO1xuICB9XG4gIGRyYWdPdmVySGFuZGxlciA9IChldmVudDogRHJhZ0V2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZyhldmVudCk7XG4gICAgY29uc3QgcmVhY3QgPSAodGhpcy5lbGVtZW50UmVmXG4gICAgICAubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICBjb25zdCBkcm9wSXRlbVN0YXJ0WCA9XG4gICAgICBldmVudC5jbGllbnRYIC0gcmVhY3QubGVmdCAtIHRoaXMuX2N1cnJlbnQuZHJhZ0RhdGEub2Zmc2V0WDtcbiAgICBjb25zdCBkcm9wSXRlbUVuZFggPSBkcm9wSXRlbVN0YXJ0WCArIHRoaXMuX2N1cnJlbnQuY29uZmlnLmNvbXBvbmVudFdpZHRoO1xuICAgIGNvbnN0IGRyb3BJdGVtU3RhcnRZID1cbiAgICAgIGV2ZW50LmNsaWVudFkgLSByZWFjdC50b3AgLSB0aGlzLl9jdXJyZW50LmRyYWdEYXRhLm9mZnNldFk7XG4gICAgY29uc3QgZHJvcEl0ZW1FbmRZID0gZHJvcEl0ZW1TdGFydFkgKyB0aGlzLl9jdXJyZW50LmNvbmZpZy5jb21wb25lbnRIZWlnaHQ7XG4gICAgdGhpcy52YWxpZERyb3BUYXJnZXQgPSAhdGhpcy5pbnRlcm5hbFJlZ2lzdHJ5XG4gICAgICAuZ2V0QWxsVmlld0NvbnRhaW5lckl0ZW0oKVxuICAgICAgLnNvbWUocmVnaXN0cnlJdGVtID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICByZWdpc3RyeUl0ZW0uc3RhcnRYIDwgZHJvcEl0ZW1FbmRYICYmXG4gICAgICAgICAgcmVnaXN0cnlJdGVtLmVuZFggPiBkcm9wSXRlbVN0YXJ0WCAmJlxuICAgICAgICAgIHJlZ2lzdHJ5SXRlbS5zdGFydFkgPCBkcm9wSXRlbUVuZFkgJiZcbiAgICAgICAgICByZWdpc3RyeUl0ZW0uZW5kWSA+IGRyb3BJdGVtU3RhcnRZXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB0aGlzLl90ZW1wRHJvcExvY2F0aW9uLnN0eWxlLnRvcCA9IGRyb3BJdGVtU3RhcnRZICsgXCJweFwiO1xuICAgIHRoaXMuX3RlbXBEcm9wTG9jYXRpb24uc3R5bGUubGVmdCA9IGRyb3BJdGVtU3RhcnRYICsgXCJweFwiO1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpzZW1pY29sb25cbiAgICB0aGlzLl90ZW1wRHJvcExvY2F0aW9uLnN0eWxlLmJvcmRlckNvbG9yID0gdGhpcy52YWxpZERyb3BUYXJnZXRcbiAgICAgID8gXCJHcmVlblwiXG4gICAgICA6IFwiUmVkXCI7XG4gIH07XG5cbiAgQEhvc3RMaXN0ZW5lcihcImRyYWdsZWF2ZVwiLCBbXCIkZXZlbnRcIl0pXG4gIGRyYWdMZWF2ZUhhbmRsZXIoZXZlbnQ6IERyYWdFdmVudCkge1xuICAgIGNvbnNvbGUubG9nKFwiZHJhZyBsZWF2ZVwiKTtcbiAgfVxuICBASG9zdExpc3RlbmVyKFwiZHJvcFwiLCBbXCIkZXZlbnRcIl0pXG4gIGRyb3BIYW5kbGVyKGV2ZW50OiBEcmFnRXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICh0aGlzLnZhbGlkRHJvcFRhcmdldCkge1xuICAgICAgY29uc3QgZHJvcFN1Y2Nlc3NFdmVudDogRHJvcFN1Y2Nlc3NTeW50aGV0aWNFdmVudCA9IHtcbiAgICAgICAgZXZlbnQ6IGV2ZW50LFxuICAgICAgICBjb21wb25lbnROYW1lOiB0aGlzLl9jdXJyZW50LmNvbmZpZy5jb21wb25lbnROYW1lLFxuICAgICAgICBkcmFnU291cmNlU2VsZWN0b3I6IHRoaXMuX2N1cnJlbnQuY29uZmlnLndpZGdldElkLFxuICAgICAgICB3aWRnZXRJZDogdGhpcy5fY3VycmVudC5jb25maWcud2lkZ2V0SWQsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICBcInRvcC5weFwiOiB0aGlzLl90ZW1wRHJvcExvY2F0aW9uLnN0eWxlLnRvcC5yZXBsYWNlKC9weC8sIFwiXCIpLFxuICAgICAgICAgIFwibGVmdC5weFwiOiB0aGlzLl90ZW1wRHJvcExvY2F0aW9uLnN0eWxlLmxlZnQucmVwbGFjZSgvcHgvLCBcIlwiKVxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB0aGlzLmRyb3BzdWNjZXNzLmVtaXQoZHJvcFN1Y2Nlc3NFdmVudCk7XG4gICAgfVxuICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2hpbGQoXG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcbiAgICAgIHRoaXMuX3RlbXBEcm9wTG9jYXRpb25cbiAgICApO1xuICB9XG59XG4iXX0=