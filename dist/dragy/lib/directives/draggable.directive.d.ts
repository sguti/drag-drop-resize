import { ElementRef, OnInit, OnDestroy } from "@angular/core";
import { GInternalRegistryService } from "../services/internal-registry.service";
import { DraggableDirectiveConfig } from "../models/draggable-directive.config";
export declare class DraggableDirective implements OnInit, OnDestroy {
    private elementRef;
    private internalRegistry;
    config: DraggableDirectiveConfig;
    private registered;
    private offsetX;
    private offsetY;
    constructor(elementRef: ElementRef, internalRegistry: GInternalRegistryService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    showInvalidWidget(): void;
    mouseDownHandler(event: MouseEvent): void;
    dragStartHandler(event: DragEvent): void;
    dragEndHandler(event: DragEvent): void;
}
