import { CommonModule } from '@angular/common';
import { fromEvent, timer } from 'rxjs';
import { debounce, takeWhile, distinctUntilChanged, tap, first } from 'rxjs/operators';
import { Injectable, NgModule, ComponentFactoryResolver, Directive, HostListener, ElementRef, Input, Component, ViewChild, ViewContainerRef, ChangeDetectionStrategy, Output, EventEmitter, Renderer2, defineInjectable, inject } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GInternalRegistryService {
    constructor() {
        this.widgetRegistry = {};
        this.dragEventRegistry = {};
        this.viewContainerRegistry = {};
    }
    /**
     * @param {?} config
     * @return {?}
     */
    registerWidget(config) {
        if (!config.widgetId || this.widgetRegistry[config.widgetId]) {
            return false;
        }
        this.widgetRegistry[config.widgetId] = config;
        return true;
    }
    /**
     * @param {?} widgetId
     * @return {?}
     */
    unRegisterWidget(widgetId) {
        return delete this.widgetRegistry[widgetId];
    }
    /**
     * @param {?} widgetId
     * @return {?}
     */
    getWidgetConfig(widgetId) {
        return this.widgetRegistry[widgetId];
    }
    /**
     * @param {?} dragId
     * @param {?} dragData
     * @return {?}
     */
    addDragData(dragId, dragData) {
        this.dragEventRegistry[dragId] = dragData;
    }
    /**
     * @param {?} dragId
     * @return {?}
     */
    getDragData(dragId) {
        return this.dragEventRegistry[dragId];
    }
    /**
     * @param {?} dragId
     * @return {?}
     */
    clearDragData(dragId) {
        return delete this.dragEventRegistry[dragId];
    }
    /**
     * @param {?} identifier
     * @param {?} entry
     * @return {?}
     */
    addViewContainerItem(identifier, entry) {
        this.viewContainerRegistry[identifier] = entry;
    }
    /**
     * @param {?} identifer
     * @return {?}
     */
    getViewContainerItem(identifer) {
        return this.viewContainerRegistry[identifer];
    }
    /**
     * @return {?}
     */
    getAllViewContainerItem() {
        return Object.keys(this.viewContainerRegistry).map(key => this.viewContainerRegistry[key]);
    }
    /**
     * @param {?} identifer
     * @return {?}
     */
    removeViewContainerItem(identifer) {
        return delete this.viewContainerRegistry[identifer];
    }
    /**
     * @param {?} identifer
     * @return {?}
     */
    checkViewContainerItemEntry(identifer) {
        return identifer in this.viewContainerRegistry;
    }
}
GInternalRegistryService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] }
];
/** @nocollapse */
GInternalRegistryService.ctorParameters = () => [];
/** @nocollapse */ GInternalRegistryService.ngInjectableDef = defineInjectable({ factory: function GInternalRegistryService_Factory() { return new GInternalRegistryService(); }, token: GInternalRegistryService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DraggableDirectiveConfig {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DraggableDirective {
    /**
     * @param {?} elementRef
     * @param {?} internalRegistry
     */
    constructor(elementRef, internalRegistry) {
        this.elementRef = elementRef;
        this.internalRegistry = internalRegistry;
        this.registered = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.internalRegistry.registerWidget(this.config)) {
            this.registered = true;
            this.elementRef.nativeElement.setAttribute("draggable", "true");
        }
        else {
            console.error(`Widget id ${this.config.widgetId} is not unique`);
            this.showInvalidWidget();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.internalRegistry.unRegisterWidget(this.config.widgetId);
    }
    /**
     * @return {?}
     */
    showInvalidWidget() {
        /** @type {?} */
        const border = this.elementRef.nativeElement.style.border;
        this.elementRef.nativeElement.style.border = "2px solid red";
        setTimeout(() => {
            this.elementRef.nativeElement.style.border = border;
        }, 2000);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    mouseDownHandler(event) {
        if (this.registered) {
            this.offsetX = event.offsetX;
            this.offsetY = event.offsetY;
            console.log(`x: ${this.offsetX},y : ${this.offsetY}`);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    dragStartHandler(event) {
        if (this.registered) {
            if (this.config.dragImage && false) {
                /** @type {?} */
                const image = new Image(this.config.componentWidth, this.config.componentHeight);
                image.src = this.config.dragImage;
                event.dataTransfer.setDragImage(image, 0, 0);
            }
            /** @type {?} */
            const eventId = "drag_" + Math.floor(Math.random() * 9999999) + 1;
            this.internalRegistry.addDragData(eventId, {
                offsetX: this.offsetX,
                offsetY: this.offsetY,
                widgetId: this.config.widgetId
            });
            event.dataTransfer.setData(eventId, eventId);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    dragEndHandler(event) { }
}
DraggableDirective.decorators = [
    { type: Directive, args: [{
                selector: "[gDraggable]"
            },] }
];
/** @nocollapse */
DraggableDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: GInternalRegistryService }
];
DraggableDirective.propDecorators = {
    config: [{ type: Input, args: ["gConfig",] }],
    mouseDownHandler: [{ type: HostListener, args: ["mousedown", ["$event"],] }],
    dragStartHandler: [{ type: HostListener, args: ["dragstart", ["$event"],] }],
    dragEndHandler: [{ type: HostListener, args: ["dragend", ["$event"],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DroppableDirective {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} internalRegistry
     */
    constructor(elementRef, renderer, internalRegistry) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.internalRegistry = internalRegistry;
        this.isAlive = true;
        this.validDropTarget = true;
        this.dropsuccess = new EventEmitter();
        this.dragOverHandler = (event) => {
            event.preventDefault();
            console.log(event);
            /** @type {?} */
            const react = ((/** @type {?} */ (this.elementRef
                .nativeElement))).getBoundingClientRect();
            /** @type {?} */
            const dropItemStartX = event.clientX - react.left - this._current.dragData.offsetX;
            /** @type {?} */
            const dropItemEndX = dropItemStartX + this._current.config.componentWidth;
            /** @type {?} */
            const dropItemStartY = event.clientY - react.top - this._current.dragData.offsetY;
            /** @type {?} */
            const dropItemEndY = dropItemStartY + this._current.config.componentHeight;
            this.validDropTarget = !this.internalRegistry
                .getAllViewContainerItem()
                .some(registryItem => {
                return (registryItem.startX < dropItemEndX &&
                    registryItem.endX > dropItemStartX &&
                    registryItem.startY < dropItemEndY &&
                    registryItem.endY > dropItemStartY);
            });
            this._tempDropLocation.style.top = dropItemStartY + "px";
            this._tempDropLocation.style.left = dropItemStartX + "px";
            // tslint:disable-next-line:semicolon
            this._tempDropLocation.style.borderColor = this.validDropTarget
                ? "Green"
                : "Red";
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._tempDropLocation = document.createElement("div");
        this._tempDropLocation.style.border = "2px dashed green";
        this._tempDropLocation.style.position = "absolute";
        fromEvent(this.elementRef.nativeElement, "dragover")
            .pipe(takeWhile(() => this.isAlive), tap((event) => event.preventDefault()), distinctUntilChanged((event1, event2) => {
            return (event1.clientX === event2.clientX &&
                event1.clientY === event2.clientY);
        }), debounce(() => timer(100)))
            .subscribe(this.dragOverHandler);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.isAlive = false;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    dragEnterHandler(event) {
        event.preventDefault();
        event.dataTransfer.dropEffect = "move";
        /** @type {?} */
        const eventId = event.dataTransfer.types[0];
        /** @type {?} */
        const dragData = this.internalRegistry.getDragData(eventId);
        /** @type {?} */
        const config = this.internalRegistry.getWidgetConfig(dragData.widgetId);
        this._current = {
            eventId: event.dataTransfer.types[0],
            dragData: this.internalRegistry.getDragData(eventId),
            config: this.internalRegistry.getWidgetConfig(dragData.widgetId)
        };
        this._tempDropLocation.style.height = config.componentHeight + "px";
        this._tempDropLocation.style.width = config.componentWidth + "px";
        this.renderer.appendChild(this.elementRef.nativeElement, this._tempDropLocation);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    dragLeaveHandler(event) {
        console.log("drag leave");
    }
    /**
     * @param {?} event
     * @return {?}
     */
    dropHandler(event) {
        event.preventDefault();
        if (this.validDropTarget) {
            /** @type {?} */
            const dropSuccessEvent = {
                event: event,
                componentName: this._current.config.componentName,
                dragSourceSelector: this._current.config.widgetId,
                widgetId: this._current.config.widgetId,
                style: {
                    position: "absolute",
                    "top.px": this._tempDropLocation.style.top.replace(/px/, ""),
                    "left.px": this._tempDropLocation.style.left.replace(/px/, "")
                }
            };
            this.dropsuccess.emit(dropSuccessEvent);
        }
        this.renderer.removeChild(this.elementRef.nativeElement, this._tempDropLocation);
    }
}
DroppableDirective.decorators = [
    { type: Directive, args: [{
                selector: "[gDroppable]"
            },] }
];
/** @nocollapse */
DroppableDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: GInternalRegistryService }
];
DroppableDirective.propDecorators = {
    dropsuccess: [{ type: Output }],
    dragEnterHandler: [{ type: HostListener, args: ["dragenter", ["$event"],] }],
    dragLeaveHandler: [{ type: HostListener, args: ["dragleave", ["$event"],] }],
    dropHandler: [{ type: HostListener, args: ["drop", ["$event"],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GComponentRegistryService {
    constructor() {
        this.registry = new Set();
    }
    /**
     * @param {?} componentName
     * @param {?} component
     * @return {?}
     */
    register(componentName, component) {
        if (this.registry[componentName]) {
            console.warn(`${componentName} already exists in registry. Will be overwriten.`);
        }
        this.registry[componentName] = component;
        return this;
    }
    /**
     * @param {?} componentName
     * @return {?}
     */
    get(componentName) {
        return this.registry[componentName];
    }
}
GComponentRegistryService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] }
];
/** @nocollapse */
GComponentRegistryService.ctorParameters = () => [];
/** @nocollapse */ GComponentRegistryService.ngInjectableDef = defineInjectable({ factory: function GComponentRegistryService_Factory() { return new GComponentRegistryService(); }, token: GComponentRegistryService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GComponentFactoryService {
    /**
     * @param {?} resolver
     * @param {?} registry
     */
    constructor(resolver, registry) {
        this.resolver = resolver;
        this.registry = registry;
    }
    /**
     * @param {?} componentName
     * @return {?}
     */
    componentFactory(componentName) {
        /** @type {?} */
        const factory = this.resolver.resolveComponentFactory(this.registry.get(componentName));
        return factory;
    }
}
GComponentFactoryService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] }
];
/** @nocollapse */
GComponentFactoryService.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: GComponentRegistryService }
];
/** @nocollapse */ GComponentFactoryService.ngInjectableDef = defineInjectable({ factory: function GComponentFactoryService_Factory() { return new GComponentFactoryService(inject(ComponentFactoryResolver), inject(GComponentRegistryService)); }, token: GComponentFactoryService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DropZoneState {
    constructor() {
        this.length = 0;
        this.items = {};
    }
}
class DropZoneItem {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DropZoneComponent {
    /**
     * @param {?} gComponentFactoryService
     * @param {?} internalRegistry
     */
    constructor(gComponentFactoryService, internalRegistry) {
        this.gComponentFactoryService = gComponentFactoryService;
        this.internalRegistry = internalRegistry;
        this.update = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if ("state" in changes && changes["state"].firstChange) {
            for (const key in this.state.items) {
                if (this.state.items.hasOwnProperty(key)) {
                    /** @type {?} */
                    const dropZoneItem = this.state.items[key];
                    this.projectWidgetInView(dropZoneItem.widgetId, dropZoneItem.componentName, dropZoneItem.style);
                }
            }
        }
    }
    /**
     * @param {?} syntheticEvent
     * @return {?}
     */
    dropsuccessHandler(syntheticEvent) {
        if (this.internalRegistry.checkViewContainerItemEntry(syntheticEvent.widgetId)) {
            return console.error("This widget is alrady pojected in view");
        }
        this.projectWidgetInView(syntheticEvent.widgetId, syntheticEvent.componentName, syntheticEvent.style);
        this.state.items[syntheticEvent.widgetId] = {
            componentName: syntheticEvent.componentName,
            style: syntheticEvent.style,
            widgetId: syntheticEvent.widgetId
        };
        this.state.length += 1;
        this.update.emit(this.state);
    }
    /**
     * @param {?} identifier
     * @param {?} componentName
     * @param {?} style
     * @return {?}
     */
    projectWidgetInView(identifier, componentName, style) {
        /** @type {?} */
        const factory = this.gComponentFactoryService.componentFactory(componentName);
        /** @type {?} */
        const component = this.container.createComponent(factory);
        /** @type {?} */
        const widgetProjection = (/** @type {?} */ (component.instance));
        widgetProjection.widgetId = identifier;
        widgetProjection.style = style;
        widgetProjection._remove
            .pipe(takeWhile(_ => widgetProjection.isActive), first())
            .subscribe(widgetIdentifier => {
            this.container.remove(this.internalRegistry.getViewContainerItem(widgetIdentifier)
                .viewContainerIndex);
            this.internalRegistry.removeViewContainerItem(widgetIdentifier);
            delete this.state.items[widgetIdentifier];
            this.state.length -= 1;
            this.update.emit(this.state);
        });
        /** @type {?} */
        const computedStyle = getComputedStyle(component.location.nativeElement.children[0]);
        this.internalRegistry.addViewContainerItem(identifier, {
            viewContainerIndex: this.container.length - 1,
            startX: +style["left.px"],
            startY: +style["top.px"],
            endX: +style["left.px"] + +computedStyle.width.replace(/px/, ""),
            endY: +style["top.px"] + +computedStyle.height.replace(/px/, "")
        });
    }
}
DropZoneComponent.decorators = [
    { type: Component, args: [{
                selector: "g-drop-zone",
                template: `
    <div (dropsuccess)="dropsuccessHandler($event)" gDroppable>
      <template #dropContainer></template>
    </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [`
      div {
        width: 100%;
        height: 100%;
      }
      div * {
        pointer-events: none;
      }
    `]
            }] }
];
/** @nocollapse */
DropZoneComponent.ctorParameters = () => [
    { type: GComponentFactoryService },
    { type: GInternalRegistryService }
];
DropZoneComponent.propDecorators = {
    state: [{ type: Input }],
    update: [{ type: Output }],
    container: [{ type: ViewChild, args: ["dropContainer", { read: ViewContainerRef },] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DragyModule {
}
DragyModule.decorators = [
    { type: NgModule, args: [{
                declarations: [DraggableDirective, DroppableDirective, DropZoneComponent],
                imports: [CommonModule],
                providers: [GComponentFactoryService, GInternalRegistryService],
                exports: [DraggableDirective, DroppableDirective, DropZoneComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IWidgetProjection {
    constructor() {
        this.isActive = true;
        this._remove = new EventEmitter();
    }
    /**
     * @return {?}
     */
    remove() {
        this._remove.emit(this.widgetId);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.isActive = false;
    }
}
IWidgetProjection.propDecorators = {
    widgetId: [{ type: Input }],
    style: [{ type: Input }],
    _remove: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DragData {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DropSuccessSyntheticEvent {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ViewContainerItem {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { DragyModule, DropZoneComponent, DraggableDirective, DroppableDirective, IWidgetProjection, DragData, DraggableDirectiveConfig, DropSuccessSyntheticEvent, DropZoneState, DropZoneItem, ViewContainerItem, GComponentRegistryService, DropZoneComponent as ɵc, DraggableDirective as ɵa, DroppableDirective as ɵb, GComponentFactoryService as ɵd, GInternalRegistryService as ɵe };

//# sourceMappingURL=dragy.js.map