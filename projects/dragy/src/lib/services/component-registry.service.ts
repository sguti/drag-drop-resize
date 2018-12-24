import { Injectable, Type } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class GComponentRegistryService {
  private registry = new Set<Type<{}>>();
  constructor() {}
  register(
    componentName: string,
    component: Type<{}>
  ): GComponentRegistryService {
    if (this.registry[componentName]) {
      console.warn(
        `${componentName} already exists in registry. Will be overwriten.`
      );
    }
    this.registry[componentName] = component;
    return this;
  }
  get(componentName: string) {
    return this.registry[componentName];
  }
}
