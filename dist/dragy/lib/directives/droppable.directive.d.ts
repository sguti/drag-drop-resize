import { ElementRef, EventEmitter, OnInit, Renderer2, OnDestroy } from "@angular/core";
import { DropSuccessSyntheticEvent } from "../models/drop-success-synthetic-event";
import { GInternalRegistryService } from "../services/internal-registry.service";
export declare class DroppableDirective implements OnInit, OnDestroy {
    private elementRef;
    private renderer;
    private internalRegistry;
    constructor(elementRef: ElementRef, renderer: Renderer2, internalRegistry: GInternalRegistryService);
    private isAlive;
    private _tempDropLocation;
    private validDropTarget;
    private _current;
    dropsuccess: EventEmitter<DropSuccessSyntheticEvent>;
    ngOnInit(): void;
    ngOnDestroy(): void;
    dragEnterHandler(event: DragEvent): void;
    dragOverHandler: (event: DragEvent) => void;
    dragLeaveHandler(event: DragEvent): void;
    dropHandler(event: DragEvent): void;
}
