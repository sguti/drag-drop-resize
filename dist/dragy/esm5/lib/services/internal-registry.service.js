/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import * as i0 from "@angular/core";
var GInternalRegistryService = /** @class */ (function () {
    function GInternalRegistryService() {
        this.widgetRegistry = {};
        this.dragEventRegistry = {};
        this.viewContainerRegistry = {};
    }
    /**
     * @param {?} config
     * @return {?}
     */
    GInternalRegistryService.prototype.registerWidget = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        if (!config.widgetId || this.widgetRegistry[config.widgetId]) {
            return false;
        }
        this.widgetRegistry[config.widgetId] = config;
        return true;
    };
    /**
     * @param {?} widgetId
     * @return {?}
     */
    GInternalRegistryService.prototype.unRegisterWidget = /**
     * @param {?} widgetId
     * @return {?}
     */
    function (widgetId) {
        return delete this.widgetRegistry[widgetId];
    };
    /**
     * @param {?} widgetId
     * @return {?}
     */
    GInternalRegistryService.prototype.getWidgetConfig = /**
     * @param {?} widgetId
     * @return {?}
     */
    function (widgetId) {
        return this.widgetRegistry[widgetId];
    };
    /**
     * @param {?} dragId
     * @param {?} dragData
     * @return {?}
     */
    GInternalRegistryService.prototype.addDragData = /**
     * @param {?} dragId
     * @param {?} dragData
     * @return {?}
     */
    function (dragId, dragData) {
        this.dragEventRegistry[dragId] = dragData;
    };
    /**
     * @param {?} dragId
     * @return {?}
     */
    GInternalRegistryService.prototype.getDragData = /**
     * @param {?} dragId
     * @return {?}
     */
    function (dragId) {
        return this.dragEventRegistry[dragId];
    };
    /**
     * @param {?} dragId
     * @return {?}
     */
    GInternalRegistryService.prototype.clearDragData = /**
     * @param {?} dragId
     * @return {?}
     */
    function (dragId) {
        return delete this.dragEventRegistry[dragId];
    };
    /**
     * @param {?} identifier
     * @param {?} entry
     * @return {?}
     */
    GInternalRegistryService.prototype.addViewContainerItem = /**
     * @param {?} identifier
     * @param {?} entry
     * @return {?}
     */
    function (identifier, entry) {
        this.viewContainerRegistry[identifier] = entry;
    };
    /**
     * @param {?} identifer
     * @return {?}
     */
    GInternalRegistryService.prototype.getViewContainerItem = /**
     * @param {?} identifer
     * @return {?}
     */
    function (identifer) {
        return this.viewContainerRegistry[identifer];
    };
    /**
     * @return {?}
     */
    GInternalRegistryService.prototype.getAllViewContainerItem = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return Object.keys(this.viewContainerRegistry).map(function (key) { return _this.viewContainerRegistry[key]; });
    };
    /**
     * @param {?} identifer
     * @return {?}
     */
    GInternalRegistryService.prototype.removeViewContainerItem = /**
     * @param {?} identifer
     * @return {?}
     */
    function (identifer) {
        return delete this.viewContainerRegistry[identifer];
    };
    /**
     * @param {?} identifer
     * @return {?}
     */
    GInternalRegistryService.prototype.checkViewContainerItemEntry = /**
     * @param {?} identifer
     * @return {?}
     */
    function (identifer) {
        return identifer in this.viewContainerRegistry;
    };
    GInternalRegistryService.decorators = [
        { type: Injectable, args: [{
                    providedIn: "root"
                },] }
    ];
    /** @nocollapse */
    GInternalRegistryService.ctorParameters = function () { return []; };
    /** @nocollapse */ GInternalRegistryService.ngInjectableDef = i0.defineInjectable({ factory: function GInternalRegistryService_Factory() { return new GInternalRegistryService(); }, token: GInternalRegistryService, providedIn: "root" });
    return GInternalRegistryService;
}());
export { GInternalRegistryService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    GInternalRegistryService.prototype.widgetRegistry;
    /**
     * @type {?}
     * @private
     */
    GInternalRegistryService.prototype.dragEventRegistry;
    /**
     * @type {?}
     * @private
     */
    GInternalRegistryService.prototype.viewContainerRegistry;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJuYWwtcmVnaXN0cnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2RyYWd5LyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2ludGVybmFsLXJlZ2lzdHJ5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSzNDO0lBSUU7UUFDUSxtQkFBYyxHQUFnRCxFQUFFLENBQUM7UUFDakUsc0JBQWlCLEdBQWdDLEVBQUUsQ0FBQztRQUNwRCwwQkFBcUIsR0FFekIsRUFBRSxDQUFDO0lBTFEsQ0FBQzs7Ozs7SUFNaEIsaURBQWM7Ozs7SUFBZCxVQUFlLE1BQWdDO1FBQzdDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQzVELE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUM7UUFDOUMsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7OztJQUNELG1EQUFnQjs7OztJQUFoQixVQUFpQixRQUFnQjtRQUMvQixPQUFPLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7OztJQUNELGtEQUFlOzs7O0lBQWYsVUFBZ0IsUUFBZ0I7UUFDOUIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Ozs7OztJQUNELDhDQUFXOzs7OztJQUFYLFVBQVksTUFBYyxFQUFFLFFBQWtCO1FBQzVDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsR0FBRyxRQUFRLENBQUM7SUFDNUMsQ0FBQzs7Ozs7SUFDRCw4Q0FBVzs7OztJQUFYLFVBQVksTUFBYztRQUN4QixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7OztJQUNELGdEQUFhOzs7O0lBQWIsVUFBYyxNQUFjO1FBQzFCLE9BQU8sT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7Ozs7O0lBQ0QsdURBQW9COzs7OztJQUFwQixVQUFxQixVQUFrQixFQUFFLEtBQXdCO1FBQy9ELElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxVQUFVLENBQUMsR0FBRyxLQUFLLENBQUM7SUFDakQsQ0FBQzs7Ozs7SUFDRCx1REFBb0I7Ozs7SUFBcEIsVUFBcUIsU0FBaUI7UUFDcEMsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7OztJQUNELDBEQUF1Qjs7O0lBQXZCO1FBQUEsaUJBSUM7UUFIQyxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsR0FBRyxDQUNoRCxVQUFBLEdBQUcsSUFBSSxPQUFBLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsRUFBL0IsQ0FBK0IsQ0FDdkMsQ0FBQztJQUNKLENBQUM7Ozs7O0lBQ0QsMERBQXVCOzs7O0lBQXZCLFVBQXdCLFNBQWlCO1FBQ3ZDLE9BQU8sT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7Ozs7SUFDRCw4REFBMkI7Ozs7SUFBM0IsVUFBNEIsU0FBaUI7UUFDM0MsT0FBTyxTQUFTLElBQUksSUFBSSxDQUFDLHFCQUFxQixDQUFDO0lBQ2pELENBQUM7O2dCQWhERixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7OzttQ0FQRDtDQXNEQyxBQWpERCxJQWlEQztTQTlDWSx3QkFBd0I7Ozs7OztJQUVuQyxrREFBeUU7Ozs7O0lBQ3pFLHFEQUE0RDs7Ozs7SUFDNUQseURBRU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IERyYWdnYWJsZURpcmVjdGl2ZUNvbmZpZyB9IGZyb20gXCIuLi9tb2RlbHMvZHJhZ2dhYmxlLWRpcmVjdGl2ZS5jb25maWdcIjtcbmltcG9ydCB7IERyYWdEYXRhIH0gZnJvbSBcIi4uL21vZGVscy9kcmFnLWRhdGEubW9kZWxcIjtcbmltcG9ydCB7IFZpZXdDb250YWluZXJJdGVtIH0gZnJvbSBcIi4uL21vZGVscy92aWV3LWNvbnRhaW5lci1pdGVtLm1vZGVsXCI7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogXCJyb290XCJcbn0pXG5leHBvcnQgY2xhc3MgR0ludGVybmFsUmVnaXN0cnlTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoKSB7fVxuICBwcml2YXRlIHdpZGdldFJlZ2lzdHJ5OiB7IFtrZXk6IHN0cmluZ106IERyYWdnYWJsZURpcmVjdGl2ZUNvbmZpZyB9ID0ge307XG4gIHByaXZhdGUgZHJhZ0V2ZW50UmVnaXN0cnk6IHsgW2tleTogc3RyaW5nXTogRHJhZ0RhdGEgfSA9IHt9O1xuICBwcml2YXRlIHZpZXdDb250YWluZXJSZWdpc3RyeToge1xuICAgIFtrZXk6IHN0cmluZ106IFZpZXdDb250YWluZXJJdGVtO1xuICB9ID0ge307XG4gIHJlZ2lzdGVyV2lkZ2V0KGNvbmZpZzogRHJhZ2dhYmxlRGlyZWN0aXZlQ29uZmlnKTogYm9vbGVhbiB7XG4gICAgaWYgKCFjb25maWcud2lkZ2V0SWQgfHwgdGhpcy53aWRnZXRSZWdpc3RyeVtjb25maWcud2lkZ2V0SWRdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMud2lkZ2V0UmVnaXN0cnlbY29uZmlnLndpZGdldElkXSA9IGNvbmZpZztcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICB1blJlZ2lzdGVyV2lkZ2V0KHdpZGdldElkOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gZGVsZXRlIHRoaXMud2lkZ2V0UmVnaXN0cnlbd2lkZ2V0SWRdO1xuICB9XG4gIGdldFdpZGdldENvbmZpZyh3aWRnZXRJZDogc3RyaW5nKTogRHJhZ2dhYmxlRGlyZWN0aXZlQ29uZmlnIHtcbiAgICByZXR1cm4gdGhpcy53aWRnZXRSZWdpc3RyeVt3aWRnZXRJZF07XG4gIH1cbiAgYWRkRHJhZ0RhdGEoZHJhZ0lkOiBzdHJpbmcsIGRyYWdEYXRhOiBEcmFnRGF0YSkge1xuICAgIHRoaXMuZHJhZ0V2ZW50UmVnaXN0cnlbZHJhZ0lkXSA9IGRyYWdEYXRhO1xuICB9XG4gIGdldERyYWdEYXRhKGRyYWdJZDogc3RyaW5nKTogRHJhZ0RhdGEge1xuICAgIHJldHVybiB0aGlzLmRyYWdFdmVudFJlZ2lzdHJ5W2RyYWdJZF07XG4gIH1cbiAgY2xlYXJEcmFnRGF0YShkcmFnSWQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBkZWxldGUgdGhpcy5kcmFnRXZlbnRSZWdpc3RyeVtkcmFnSWRdO1xuICB9XG4gIGFkZFZpZXdDb250YWluZXJJdGVtKGlkZW50aWZpZXI6IHN0cmluZywgZW50cnk6IFZpZXdDb250YWluZXJJdGVtKSB7XG4gICAgdGhpcy52aWV3Q29udGFpbmVyUmVnaXN0cnlbaWRlbnRpZmllcl0gPSBlbnRyeTtcbiAgfVxuICBnZXRWaWV3Q29udGFpbmVySXRlbShpZGVudGlmZXI6IHN0cmluZyk6IFZpZXdDb250YWluZXJJdGVtIHtcbiAgICByZXR1cm4gdGhpcy52aWV3Q29udGFpbmVyUmVnaXN0cnlbaWRlbnRpZmVyXTtcbiAgfVxuICBnZXRBbGxWaWV3Q29udGFpbmVySXRlbSgpOiBWaWV3Q29udGFpbmVySXRlbVtdIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy52aWV3Q29udGFpbmVyUmVnaXN0cnkpLm1hcChcbiAgICAgIGtleSA9PiB0aGlzLnZpZXdDb250YWluZXJSZWdpc3RyeVtrZXldXG4gICAgKTtcbiAgfVxuICByZW1vdmVWaWV3Q29udGFpbmVySXRlbShpZGVudGlmZXI6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBkZWxldGUgdGhpcy52aWV3Q29udGFpbmVyUmVnaXN0cnlbaWRlbnRpZmVyXTtcbiAgfVxuICBjaGVja1ZpZXdDb250YWluZXJJdGVtRW50cnkoaWRlbnRpZmVyOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gaWRlbnRpZmVyIGluIHRoaXMudmlld0NvbnRhaW5lclJlZ2lzdHJ5O1xuICB9XG59XG4iXX0=