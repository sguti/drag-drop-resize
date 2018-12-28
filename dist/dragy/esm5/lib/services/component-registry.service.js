/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import * as i0 from "@angular/core";
var GComponentRegistryService = /** @class */ (function () {
    function GComponentRegistryService() {
        this.registry = new Set();
    }
    /**
     * @param {?} componentName
     * @param {?} component
     * @return {?}
     */
    GComponentRegistryService.prototype.register = /**
     * @param {?} componentName
     * @param {?} component
     * @return {?}
     */
    function (componentName, component) {
        if (this.registry[componentName]) {
            console.warn(componentName + " already exists in registry. Will be overwriten.");
        }
        this.registry[componentName] = component;
        return this;
    };
    /**
     * @param {?} componentName
     * @return {?}
     */
    GComponentRegistryService.prototype.get = /**
     * @param {?} componentName
     * @return {?}
     */
    function (componentName) {
        return this.registry[componentName];
    };
    GComponentRegistryService.decorators = [
        { type: Injectable, args: [{
                    providedIn: "root"
                },] }
    ];
    /** @nocollapse */
    GComponentRegistryService.ctorParameters = function () { return []; };
    /** @nocollapse */ GComponentRegistryService.ngInjectableDef = i0.defineInjectable({ factory: function GComponentRegistryService_Factory() { return new GComponentRegistryService(); }, token: GComponentRegistryService, providedIn: "root" });
    return GComponentRegistryService;
}());
export { GComponentRegistryService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    GComponentRegistryService.prototype.registry;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LXJlZ2lzdHJ5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kcmFneS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9jb21wb25lbnQtcmVnaXN0cnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBUSxNQUFNLGVBQWUsQ0FBQzs7QUFFakQ7SUFLRTtRQURRLGFBQVEsR0FBRyxJQUFJLEdBQUcsRUFBWSxDQUFDO0lBQ3hCLENBQUM7Ozs7OztJQUNoQiw0Q0FBUTs7Ozs7SUFBUixVQUNFLGFBQXFCLEVBQ3JCLFNBQW1CO1FBRW5CLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsRUFBRTtZQUNoQyxPQUFPLENBQUMsSUFBSSxDQUNQLGFBQWEscURBQWtELENBQ25FLENBQUM7U0FDSDtRQUNELElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsU0FBUyxDQUFDO1FBQ3pDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7SUFDRCx1Q0FBRzs7OztJQUFILFVBQUksYUFBcUI7UUFDdkIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7O2dCQXBCRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7OztvQ0FKRDtDQXVCQyxBQXJCRCxJQXFCQztTQWxCWSx5QkFBeUI7Ozs7OztJQUNwQyw2Q0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBUeXBlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBcInJvb3RcIlxufSlcbmV4cG9ydCBjbGFzcyBHQ29tcG9uZW50UmVnaXN0cnlTZXJ2aWNlIHtcbiAgcHJpdmF0ZSByZWdpc3RyeSA9IG5ldyBTZXQ8VHlwZTx7fT4+KCk7XG4gIGNvbnN0cnVjdG9yKCkge31cbiAgcmVnaXN0ZXIoXG4gICAgY29tcG9uZW50TmFtZTogc3RyaW5nLFxuICAgIGNvbXBvbmVudDogVHlwZTx7fT5cbiAgKTogR0NvbXBvbmVudFJlZ2lzdHJ5U2VydmljZSB7XG4gICAgaWYgKHRoaXMucmVnaXN0cnlbY29tcG9uZW50TmFtZV0pIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Y29tcG9uZW50TmFtZX0gYWxyZWFkeSBleGlzdHMgaW4gcmVnaXN0cnkuIFdpbGwgYmUgb3ZlcndyaXRlbi5gXG4gICAgICApO1xuICAgIH1cbiAgICB0aGlzLnJlZ2lzdHJ5W2NvbXBvbmVudE5hbWVdID0gY29tcG9uZW50O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIGdldChjb21wb25lbnROYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZWdpc3RyeVtjb21wb25lbnROYW1lXTtcbiAgfVxufVxuIl19