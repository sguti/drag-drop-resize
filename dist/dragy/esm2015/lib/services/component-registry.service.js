/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import * as i0 from "@angular/core";
export class GComponentRegistryService {
    constructor() {
        this.registry = new Set();
    }
    /**
     * @param {?} componentName
     * @param {?} component
     * @return {?}
     */
    register(componentName, component) {
        if (this.registry[componentName]) {
            console.warn(`${componentName} already exists in registry. Will be overwriten.`);
        }
        this.registry[componentName] = component;
        return this;
    }
    /**
     * @param {?} componentName
     * @return {?}
     */
    get(componentName) {
        return this.registry[componentName];
    }
}
GComponentRegistryService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] }
];
/** @nocollapse */
GComponentRegistryService.ctorParameters = () => [];
/** @nocollapse */ GComponentRegistryService.ngInjectableDef = i0.defineInjectable({ factory: function GComponentRegistryService_Factory() { return new GComponentRegistryService(); }, token: GComponentRegistryService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    GComponentRegistryService.prototype.registry;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LXJlZ2lzdHJ5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kcmFneS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9jb21wb25lbnQtcmVnaXN0cnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBUSxNQUFNLGVBQWUsQ0FBQzs7QUFLakQsTUFBTSxPQUFPLHlCQUF5QjtJQUVwQztRQURRLGFBQVEsR0FBRyxJQUFJLEdBQUcsRUFBWSxDQUFDO0lBQ3hCLENBQUM7Ozs7OztJQUNoQixRQUFRLENBQ04sYUFBcUIsRUFDckIsU0FBbUI7UUFFbkIsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxFQUFFO1lBQ2hDLE9BQU8sQ0FBQyxJQUFJLENBQ1YsR0FBRyxhQUFhLGtEQUFrRCxDQUNuRSxDQUFDO1NBQ0g7UUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLFNBQVMsQ0FBQztRQUN6QyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7O0lBQ0QsR0FBRyxDQUFDLGFBQXFCO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs7WUFwQkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7Ozs7Ozs7O0lBRUMsNkNBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgVHlwZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogXCJyb290XCJcbn0pXG5leHBvcnQgY2xhc3MgR0NvbXBvbmVudFJlZ2lzdHJ5U2VydmljZSB7XG4gIHByaXZhdGUgcmVnaXN0cnkgPSBuZXcgU2V0PFR5cGU8e30+PigpO1xuICBjb25zdHJ1Y3RvcigpIHt9XG4gIHJlZ2lzdGVyKFxuICAgIGNvbXBvbmVudE5hbWU6IHN0cmluZyxcbiAgICBjb21wb25lbnQ6IFR5cGU8e30+XG4gICk6IEdDb21wb25lbnRSZWdpc3RyeVNlcnZpY2Uge1xuICAgIGlmICh0aGlzLnJlZ2lzdHJ5W2NvbXBvbmVudE5hbWVdKSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2NvbXBvbmVudE5hbWV9IGFscmVhZHkgZXhpc3RzIGluIHJlZ2lzdHJ5LiBXaWxsIGJlIG92ZXJ3cml0ZW4uYFxuICAgICAgKTtcbiAgICB9XG4gICAgdGhpcy5yZWdpc3RyeVtjb21wb25lbnROYW1lXSA9IGNvbXBvbmVudDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBnZXQoY29tcG9uZW50TmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVnaXN0cnlbY29tcG9uZW50TmFtZV07XG4gIH1cbn1cbiJdfQ==