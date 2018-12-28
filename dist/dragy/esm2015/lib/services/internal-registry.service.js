/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import * as i0 from "@angular/core";
export class GInternalRegistryService {
    constructor() {
        this.widgetRegistry = {};
        this.dragEventRegistry = {};
        this.viewContainerRegistry = {};
    }
    /**
     * @param {?} config
     * @return {?}
     */
    registerWidget(config) {
        if (!config.widgetId || this.widgetRegistry[config.widgetId]) {
            return false;
        }
        this.widgetRegistry[config.widgetId] = config;
        return true;
    }
    /**
     * @param {?} widgetId
     * @return {?}
     */
    unRegisterWidget(widgetId) {
        return delete this.widgetRegistry[widgetId];
    }
    /**
     * @param {?} widgetId
     * @return {?}
     */
    getWidgetConfig(widgetId) {
        return this.widgetRegistry[widgetId];
    }
    /**
     * @param {?} dragId
     * @param {?} dragData
     * @return {?}
     */
    addDragData(dragId, dragData) {
        this.dragEventRegistry[dragId] = dragData;
    }
    /**
     * @param {?} dragId
     * @return {?}
     */
    getDragData(dragId) {
        return this.dragEventRegistry[dragId];
    }
    /**
     * @param {?} dragId
     * @return {?}
     */
    clearDragData(dragId) {
        return delete this.dragEventRegistry[dragId];
    }
    /**
     * @param {?} identifier
     * @param {?} entry
     * @return {?}
     */
    addViewContainerItem(identifier, entry) {
        this.viewContainerRegistry[identifier] = entry;
    }
    /**
     * @param {?} identifer
     * @return {?}
     */
    getViewContainerItem(identifer) {
        return this.viewContainerRegistry[identifer];
    }
    /**
     * @return {?}
     */
    getAllViewContainerItem() {
        return Object.keys(this.viewContainerRegistry).map(key => this.viewContainerRegistry[key]);
    }
    /**
     * @param {?} identifer
     * @return {?}
     */
    removeViewContainerItem(identifer) {
        return delete this.viewContainerRegistry[identifer];
    }
    /**
     * @param {?} identifer
     * @return {?}
     */
    checkViewContainerItemEntry(identifer) {
        return identifer in this.viewContainerRegistry;
    }
}
GInternalRegistryService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] }
];
/** @nocollapse */
GInternalRegistryService.ctorParameters = () => [];
/** @nocollapse */ GInternalRegistryService.ngInjectableDef = i0.defineInjectable({ factory: function GInternalRegistryService_Factory() { return new GInternalRegistryService(); }, token: GInternalRegistryService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJuYWwtcmVnaXN0cnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2RyYWd5LyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2ludGVybmFsLXJlZ2lzdHJ5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBUTNDLE1BQU0sT0FBTyx3QkFBd0I7SUFDbkM7UUFDUSxtQkFBYyxHQUFnRCxFQUFFLENBQUM7UUFDakUsc0JBQWlCLEdBQWdDLEVBQUUsQ0FBQztRQUNwRCwwQkFBcUIsR0FFekIsRUFBRSxDQUFDO0lBTFEsQ0FBQzs7Ozs7SUFNaEIsY0FBYyxDQUFDLE1BQWdDO1FBQzdDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQzVELE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUM7UUFDOUMsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7OztJQUNELGdCQUFnQixDQUFDLFFBQWdCO1FBQy9CLE9BQU8sT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7O0lBQ0QsZUFBZSxDQUFDLFFBQWdCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7Ozs7SUFDRCxXQUFXLENBQUMsTUFBYyxFQUFFLFFBQWtCO1FBQzVDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsR0FBRyxRQUFRLENBQUM7SUFDNUMsQ0FBQzs7Ozs7SUFDRCxXQUFXLENBQUMsTUFBYztRQUN4QixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7OztJQUNELGFBQWEsQ0FBQyxNQUFjO1FBQzFCLE9BQU8sT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7Ozs7O0lBQ0Qsb0JBQW9CLENBQUMsVUFBa0IsRUFBRSxLQUF3QjtRQUMvRCxJQUFJLENBQUMscUJBQXFCLENBQUMsVUFBVSxDQUFDLEdBQUcsS0FBSyxDQUFDO0lBQ2pELENBQUM7Ozs7O0lBQ0Qsb0JBQW9CLENBQUMsU0FBaUI7UUFDcEMsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7OztJQUNELHVCQUF1QjtRQUNyQixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsR0FBRyxDQUNoRCxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsQ0FDdkMsQ0FBQztJQUNKLENBQUM7Ozs7O0lBQ0QsdUJBQXVCLENBQUMsU0FBaUI7UUFDdkMsT0FBTyxPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN0RCxDQUFDOzs7OztJQUNELDJCQUEyQixDQUFDLFNBQWlCO1FBQzNDLE9BQU8sU0FBUyxJQUFJLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztJQUNqRCxDQUFDOzs7WUFoREYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7Ozs7Ozs7O0lBR0Msa0RBQXlFOzs7OztJQUN6RSxxREFBNEQ7Ozs7O0lBQzVELHlEQUVPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBEcmFnZ2FibGVEaXJlY3RpdmVDb25maWcgfSBmcm9tIFwiLi4vbW9kZWxzL2RyYWdnYWJsZS1kaXJlY3RpdmUuY29uZmlnXCI7XG5pbXBvcnQgeyBEcmFnRGF0YSB9IGZyb20gXCIuLi9tb2RlbHMvZHJhZy1kYXRhLm1vZGVsXCI7XG5pbXBvcnQgeyBWaWV3Q29udGFpbmVySXRlbSB9IGZyb20gXCIuLi9tb2RlbHMvdmlldy1jb250YWluZXItaXRlbS5tb2RlbFwiO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFwicm9vdFwiXG59KVxuZXhwb3J0IGNsYXNzIEdJbnRlcm5hbFJlZ2lzdHJ5U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKCkge31cbiAgcHJpdmF0ZSB3aWRnZXRSZWdpc3RyeTogeyBba2V5OiBzdHJpbmddOiBEcmFnZ2FibGVEaXJlY3RpdmVDb25maWcgfSA9IHt9O1xuICBwcml2YXRlIGRyYWdFdmVudFJlZ2lzdHJ5OiB7IFtrZXk6IHN0cmluZ106IERyYWdEYXRhIH0gPSB7fTtcbiAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVnaXN0cnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBWaWV3Q29udGFpbmVySXRlbTtcbiAgfSA9IHt9O1xuICByZWdpc3RlcldpZGdldChjb25maWc6IERyYWdnYWJsZURpcmVjdGl2ZUNvbmZpZyk6IGJvb2xlYW4ge1xuICAgIGlmICghY29uZmlnLndpZGdldElkIHx8IHRoaXMud2lkZ2V0UmVnaXN0cnlbY29uZmlnLndpZGdldElkXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLndpZGdldFJlZ2lzdHJ5W2NvbmZpZy53aWRnZXRJZF0gPSBjb25maWc7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgdW5SZWdpc3RlcldpZGdldCh3aWRnZXRJZDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGRlbGV0ZSB0aGlzLndpZGdldFJlZ2lzdHJ5W3dpZGdldElkXTtcbiAgfVxuICBnZXRXaWRnZXRDb25maWcod2lkZ2V0SWQ6IHN0cmluZyk6IERyYWdnYWJsZURpcmVjdGl2ZUNvbmZpZyB7XG4gICAgcmV0dXJuIHRoaXMud2lkZ2V0UmVnaXN0cnlbd2lkZ2V0SWRdO1xuICB9XG4gIGFkZERyYWdEYXRhKGRyYWdJZDogc3RyaW5nLCBkcmFnRGF0YTogRHJhZ0RhdGEpIHtcbiAgICB0aGlzLmRyYWdFdmVudFJlZ2lzdHJ5W2RyYWdJZF0gPSBkcmFnRGF0YTtcbiAgfVxuICBnZXREcmFnRGF0YShkcmFnSWQ6IHN0cmluZyk6IERyYWdEYXRhIHtcbiAgICByZXR1cm4gdGhpcy5kcmFnRXZlbnRSZWdpc3RyeVtkcmFnSWRdO1xuICB9XG4gIGNsZWFyRHJhZ0RhdGEoZHJhZ0lkOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gZGVsZXRlIHRoaXMuZHJhZ0V2ZW50UmVnaXN0cnlbZHJhZ0lkXTtcbiAgfVxuICBhZGRWaWV3Q29udGFpbmVySXRlbShpZGVudGlmaWVyOiBzdHJpbmcsIGVudHJ5OiBWaWV3Q29udGFpbmVySXRlbSkge1xuICAgIHRoaXMudmlld0NvbnRhaW5lclJlZ2lzdHJ5W2lkZW50aWZpZXJdID0gZW50cnk7XG4gIH1cbiAgZ2V0Vmlld0NvbnRhaW5lckl0ZW0oaWRlbnRpZmVyOiBzdHJpbmcpOiBWaWV3Q29udGFpbmVySXRlbSB7XG4gICAgcmV0dXJuIHRoaXMudmlld0NvbnRhaW5lclJlZ2lzdHJ5W2lkZW50aWZlcl07XG4gIH1cbiAgZ2V0QWxsVmlld0NvbnRhaW5lckl0ZW0oKTogVmlld0NvbnRhaW5lckl0ZW1bXSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMudmlld0NvbnRhaW5lclJlZ2lzdHJ5KS5tYXAoXG4gICAgICBrZXkgPT4gdGhpcy52aWV3Q29udGFpbmVyUmVnaXN0cnlba2V5XVxuICAgICk7XG4gIH1cbiAgcmVtb3ZlVmlld0NvbnRhaW5lckl0ZW0oaWRlbnRpZmVyOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gZGVsZXRlIHRoaXMudmlld0NvbnRhaW5lclJlZ2lzdHJ5W2lkZW50aWZlcl07XG4gIH1cbiAgY2hlY2tWaWV3Q29udGFpbmVySXRlbUVudHJ5KGlkZW50aWZlcjogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGlkZW50aWZlciBpbiB0aGlzLnZpZXdDb250YWluZXJSZWdpc3RyeTtcbiAgfVxufVxuIl19