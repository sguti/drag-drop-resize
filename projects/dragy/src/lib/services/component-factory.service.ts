import {
  Injectable,
  ComponentFactoryResolver,
  ComponentFactory
} from "@angular/core";
import { GComponentRegistryService } from "./component-registry.service";

@Injectable({
  providedIn: "root"
})
export class GComponentFactoryService {
  constructor(
    private resolver: ComponentFactoryResolver,
    private registry: GComponentRegistryService
  ) {}

  componentFactory(componentName: string): ComponentFactory<{}> {
    const factory = this.resolver.resolveComponentFactory(
      this.registry.get(componentName)
    );
    return factory;
  }
}
