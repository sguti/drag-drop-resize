/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, ComponentFactoryResolver } from "@angular/core";
import { GComponentRegistryService } from "./component-registry.service";
import * as i0 from "@angular/core";
import * as i1 from "./component-registry.service";
var GComponentFactoryService = /** @class */ (function () {
    function GComponentFactoryService(resolver, registry) {
        this.resolver = resolver;
        this.registry = registry;
    }
    /**
     * @param {?} componentName
     * @return {?}
     */
    GComponentFactoryService.prototype.componentFactory = /**
     * @param {?} componentName
     * @return {?}
     */
    function (componentName) {
        /** @type {?} */
        var factory = this.resolver.resolveComponentFactory(this.registry.get(componentName));
        return factory;
    };
    GComponentFactoryService.decorators = [
        { type: Injectable, args: [{
                    providedIn: "root"
                },] }
    ];
    /** @nocollapse */
    GComponentFactoryService.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: GComponentRegistryService }
    ]; };
    /** @nocollapse */ GComponentFactoryService.ngInjectableDef = i0.defineInjectable({ factory: function GComponentFactoryService_Factory() { return new GComponentFactoryService(i0.inject(i0.ComponentFactoryResolver), i0.inject(i1.GComponentRegistryService)); }, token: GComponentFactoryService, providedIn: "root" });
    return GComponentFactoryService;
}());
export { GComponentFactoryService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    GComponentFactoryService.prototype.resolver;
    /**
     * @type {?}
     * @private
     */
    GComponentFactoryService.prototype.registry;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LWZhY3Rvcnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2RyYWd5LyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2NvbXBvbmVudC1mYWN0b3J5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxVQUFVLEVBQ1Ysd0JBQXdCLEVBRXpCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7QUFFekU7SUFJRSxrQ0FDVSxRQUFrQyxFQUNsQyxRQUFtQztRQURuQyxhQUFRLEdBQVIsUUFBUSxDQUEwQjtRQUNsQyxhQUFRLEdBQVIsUUFBUSxDQUEyQjtJQUMxQyxDQUFDOzs7OztJQUVKLG1EQUFnQjs7OztJQUFoQixVQUFpQixhQUFxQjs7WUFDOUIsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQ25ELElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUNqQztRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7O2dCQWRGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBUEMsd0JBQXdCO2dCQUdqQix5QkFBeUI7OzttQ0FMbEM7Q0FzQkMsQUFmRCxJQWVDO1NBWlksd0JBQXdCOzs7Ozs7SUFFakMsNENBQTBDOzs7OztJQUMxQyw0Q0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbmplY3RhYmxlLFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIENvbXBvbmVudEZhY3Rvcnlcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEdDb21wb25lbnRSZWdpc3RyeVNlcnZpY2UgfSBmcm9tIFwiLi9jb21wb25lbnQtcmVnaXN0cnkuc2VydmljZVwiO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFwicm9vdFwiXG59KVxuZXhwb3J0IGNsYXNzIEdDb21wb25lbnRGYWN0b3J5U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcml2YXRlIHJlZ2lzdHJ5OiBHQ29tcG9uZW50UmVnaXN0cnlTZXJ2aWNlXG4gICkge31cblxuICBjb21wb25lbnRGYWN0b3J5KGNvbXBvbmVudE5hbWU6IHN0cmluZyk6IENvbXBvbmVudEZhY3Rvcnk8e30+IHtcbiAgICBjb25zdCBmYWN0b3J5ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShcbiAgICAgIHRoaXMucmVnaXN0cnkuZ2V0KGNvbXBvbmVudE5hbWUpXG4gICAgKTtcbiAgICByZXR1cm4gZmFjdG9yeTtcbiAgfVxufVxuIl19