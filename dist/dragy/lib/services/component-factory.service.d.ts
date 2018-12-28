import { ComponentFactoryResolver, ComponentFactory } from "@angular/core";
import { GComponentRegistryService } from "./component-registry.service";
export declare class GComponentFactoryService {
    private resolver;
    private registry;
    constructor(resolver: ComponentFactoryResolver, registry: GComponentRegistryService);
    componentFactory(componentName: string): ComponentFactory<{}>;
}
