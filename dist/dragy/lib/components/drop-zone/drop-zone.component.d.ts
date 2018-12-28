import { OnInit, ViewContainerRef, OnChanges, SimpleChanges, EventEmitter } from "@angular/core";
import { GComponentFactoryService } from "../../services/component-factory.service";
import { DropZoneState } from "../../models/drop-zone.state";
import { DropSuccessSyntheticEvent } from "../../models/drop-success-synthetic-event";
import { GInternalRegistryService } from "../../services/internal-registry.service";
export declare class DropZoneComponent implements OnInit, OnChanges {
    private gComponentFactoryService;
    private internalRegistry;
    state: DropZoneState;
    update: EventEmitter<DropZoneState>;
    container: ViewContainerRef;
    constructor(gComponentFactoryService: GComponentFactoryService, internalRegistry: GInternalRegistryService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    dropsuccessHandler(syntheticEvent: DropSuccessSyntheticEvent): void;
    projectWidgetInView(identifier: string, componentName: string, style: object): void;
}
