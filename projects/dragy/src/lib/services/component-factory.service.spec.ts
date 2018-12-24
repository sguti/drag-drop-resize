import { TestBed } from "@angular/core/testing";

import { GComponentFactoryService } from "./component-factory.service";

describe("ComponentFactoryService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: GComponentFactoryService = TestBed.get(
      GComponentFactoryService
    );
    expect(service).toBeTruthy();
  });
});
