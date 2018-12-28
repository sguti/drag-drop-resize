import { Type } from "@angular/core";
export declare class GComponentRegistryService {
    private registry;
    constructor();
    register(componentName: string, component: Type<{}>): GComponentRegistryService;
    get(componentName: string): any;
}
