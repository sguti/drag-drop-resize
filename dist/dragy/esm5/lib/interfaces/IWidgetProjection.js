/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Output, EventEmitter, Input } from "@angular/core";
var IWidgetProjection = /** @class */ (function () {
    function IWidgetProjection() {
        this.isActive = true;
        this._remove = new EventEmitter();
    }
    /**
     * @return {?}
     */
    IWidgetProjection.prototype.remove = /**
     * @return {?}
     */
    function () {
        this._remove.emit(this.widgetId);
    };
    /**
     * @return {?}
     */
    IWidgetProjection.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.isActive = false;
    };
    IWidgetProjection.propDecorators = {
        widgetId: [{ type: Input }],
        style: [{ type: Input }],
        _remove: [{ type: Output }]
    };
    return IWidgetProjection;
}());
export { IWidgetProjection };
if (false) {
    /** @type {?} */
    IWidgetProjection.prototype.isActive;
    /** @type {?} */
    IWidgetProjection.prototype.widgetId;
    /** @type {?} */
    IWidgetProjection.prototype.style;
    /** @type {?} */
    IWidgetProjection.prototype._remove;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSVdpZGdldFByb2plY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kcmFneS8iLCJzb3VyY2VzIjpbImxpYi9pbnRlcmZhY2VzL0lXaWRnZXRQcm9qZWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFFdkU7SUFBQTtRQUNFLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFHTixZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztJQU9qRCxDQUFDOzs7O0lBTkMsa0NBQU07OztJQUFOO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7SUFDRCx1Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDOzsyQkFSQSxLQUFLO3dCQUNMLEtBQUs7MEJBQ0wsTUFBTTs7SUFPVCx3QkFBQztDQUFBLEFBWEQsSUFXQztTQVhZLGlCQUFpQjs7O0lBQzVCLHFDQUFnQjs7SUFDaEIscUNBQTBCOztJQUMxQixrQ0FBdUI7O0lBQ3ZCLG9DQUErQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25EZXN0cm95IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBJV2lkZ2V0UHJvamVjdGlvbiBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcbiAgaXNBY3RpdmUgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIHdpZGdldElkOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgc3R5bGU6IG9iamVjdDtcclxuICBAT3V0cHV0KCkgX3JlbW92ZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG4gIHJlbW92ZSgpIHtcclxuICAgIHRoaXMuX3JlbW92ZS5lbWl0KHRoaXMud2lkZ2V0SWQpO1xyXG4gIH1cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcclxuICB9XHJcbn1cclxuIl19