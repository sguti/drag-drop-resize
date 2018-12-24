import { TestBed } from "@angular/core/testing";

import { GComponentRegistryService } from "./component-registry.service";

describe("ComponentRegistryService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: GComponentRegistryService = TestBed.get(
      GComponentRegistryService
    );
    expect(service).toBeTruthy();
  });
});
