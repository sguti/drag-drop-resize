import { TestBed } from "@angular/core/testing";

import { GInternalRegistryService } from "./internal-registry.service";

describe("InternalRegistryService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: GInternalRegistryService = TestBed.get(
      GInternalRegistryService
    );
    expect(service).toBeTruthy();
  });
});
