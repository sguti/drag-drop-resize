(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('rxjs'), require('rxjs/operators'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('dragy', ['exports', '@angular/common', 'rxjs', 'rxjs/operators', '@angular/core'], factory) :
    (factory((global.dragy = {}),global.ng.common,global.rxjs,global.rxjs.operators,global.ng.core));
}(this, (function (exports,common,rxjs,operators,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GInternalRegistryService = /** @class */ (function () {
        function GInternalRegistryService() {
            this.widgetRegistry = {};
            this.dragEventRegistry = {};
            this.viewContainerRegistry = {};
        }
        /**
         * @param {?} config
         * @return {?}
         */
        GInternalRegistryService.prototype.registerWidget = /**
         * @param {?} config
         * @return {?}
         */
            function (config) {
                if (!config.widgetId || this.widgetRegistry[config.widgetId]) {
                    return false;
                }
                this.widgetRegistry[config.widgetId] = config;
                return true;
            };
        /**
         * @param {?} widgetId
         * @return {?}
         */
        GInternalRegistryService.prototype.unRegisterWidget = /**
         * @param {?} widgetId
         * @return {?}
         */
            function (widgetId) {
                return delete this.widgetRegistry[widgetId];
            };
        /**
         * @param {?} widgetId
         * @return {?}
         */
        GInternalRegistryService.prototype.getWidgetConfig = /**
         * @param {?} widgetId
         * @return {?}
         */
            function (widgetId) {
                return this.widgetRegistry[widgetId];
            };
        /**
         * @param {?} dragId
         * @param {?} dragData
         * @return {?}
         */
        GInternalRegistryService.prototype.addDragData = /**
         * @param {?} dragId
         * @param {?} dragData
         * @return {?}
         */
            function (dragId, dragData) {
                this.dragEventRegistry[dragId] = dragData;
            };
        /**
         * @param {?} dragId
         * @return {?}
         */
        GInternalRegistryService.prototype.getDragData = /**
         * @param {?} dragId
         * @return {?}
         */
            function (dragId) {
                return this.dragEventRegistry[dragId];
            };
        /**
         * @param {?} dragId
         * @return {?}
         */
        GInternalRegistryService.prototype.clearDragData = /**
         * @param {?} dragId
         * @return {?}
         */
            function (dragId) {
                return delete this.dragEventRegistry[dragId];
            };
        /**
         * @param {?} identifier
         * @param {?} entry
         * @return {?}
         */
        GInternalRegistryService.prototype.addViewContainerItem = /**
         * @param {?} identifier
         * @param {?} entry
         * @return {?}
         */
            function (identifier, entry) {
                this.viewContainerRegistry[identifier] = entry;
            };
        /**
         * @param {?} identifer
         * @return {?}
         */
        GInternalRegistryService.prototype.getViewContainerItem = /**
         * @param {?} identifer
         * @return {?}
         */
            function (identifer) {
                return this.viewContainerRegistry[identifer];
            };
        /**
         * @return {?}
         */
        GInternalRegistryService.prototype.getAllViewContainerItem = /**
         * @return {?}
         */
            function () {
                var _this = this;
                return Object.keys(this.viewContainerRegistry).map(function (key) { return _this.viewContainerRegistry[key]; });
            };
        /**
         * @param {?} identifer
         * @return {?}
         */
        GInternalRegistryService.prototype.removeViewContainerItem = /**
         * @param {?} identifer
         * @return {?}
         */
            function (identifer) {
                return delete this.viewContainerRegistry[identifer];
            };
        /**
         * @param {?} identifer
         * @return {?}
         */
        GInternalRegistryService.prototype.checkViewContainerItemEntry = /**
         * @param {?} identifer
         * @return {?}
         */
            function (identifer) {
                return identifer in this.viewContainerRegistry;
            };
        GInternalRegistryService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: "root"
                    },] }
        ];
        /** @nocollapse */
        GInternalRegistryService.ctorParameters = function () { return []; };
        /** @nocollapse */ GInternalRegistryService.ngInjectableDef = i0.defineInjectable({ factory: function GInternalRegistryService_Factory() { return new GInternalRegistryService(); }, token: GInternalRegistryService, providedIn: "root" });
        return GInternalRegistryService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DraggableDirective = /** @class */ (function () {
        function DraggableDirective(elementRef, internalRegistry) {
            this.elementRef = elementRef;
            this.internalRegistry = internalRegistry;
            this.registered = false;
        }
        /**
         * @return {?}
         */
        DraggableDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                if (this.internalRegistry.registerWidget(this.config)) {
                    this.registered = true;
                    this.elementRef.nativeElement.setAttribute("draggable", "true");
                }
                else {
                    console.error("Widget id " + this.config.widgetId + " is not unique");
                    this.showInvalidWidget();
                }
            };
        /**
         * @return {?}
         */
        DraggableDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.internalRegistry.unRegisterWidget(this.config.widgetId);
            };
        /**
         * @return {?}
         */
        DraggableDirective.prototype.showInvalidWidget = /**
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var border = this.elementRef.nativeElement.style.border;
                this.elementRef.nativeElement.style.border = "2px solid red";
                setTimeout(function () {
                    _this.elementRef.nativeElement.style.border = border;
                }, 2000);
            };
        /**
         * @param {?} event
         * @return {?}
         */
        DraggableDirective.prototype.mouseDownHandler = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if (this.registered) {
                    this.offsetX = event.offsetX;
                    this.offsetY = event.offsetY;
                    console.log("x: " + this.offsetX + ",y : " + this.offsetY);
                }
            };
        /**
         * @param {?} event
         * @return {?}
         */
        DraggableDirective.prototype.dragStartHandler = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if (this.registered) {
                    if (this.config.dragImage && false) {
                        /** @type {?} */
                        var image = new Image(this.config.componentWidth, this.config.componentHeight);
                        image.src = this.config.dragImage;
                        event.dataTransfer.setDragImage(image, 0, 0);
                    }
                    /** @type {?} */
                    var eventId = "drag_" + Math.floor(Math.random() * 9999999) + 1;
                    this.internalRegistry.addDragData(eventId, {
                        offsetX: this.offsetX,
                        offsetY: this.offsetY,
                        widgetId: this.config.widgetId
                    });
                    event.dataTransfer.setData(eventId, eventId);
                }
            };
        /**
         * @param {?} event
         * @return {?}
         */
        DraggableDirective.prototype.dragEndHandler = /**
         * @param {?} event
         * @return {?}
         */
            function (event) { };
        DraggableDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: "[gDraggable]"
                    },] }
        ];
        /** @nocollapse */
        DraggableDirective.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: GInternalRegistryService }
            ];
        };
        DraggableDirective.propDecorators = {
            config: [{ type: i0.Input, args: ["gConfig",] }],
            mouseDownHandler: [{ type: i0.HostListener, args: ["mousedown", ["$event"],] }],
            dragStartHandler: [{ type: i0.HostListener, args: ["dragstart", ["$event"],] }],
            dragEndHandler: [{ type: i0.HostListener, args: ["dragend", ["$event"],] }]
        };
        return DraggableDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DroppableDirective = /** @class */ (function () {
        function DroppableDirective(elementRef, renderer, internalRegistry) {
            var _this = this;
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.internalRegistry = internalRegistry;
            this.isAlive = true;
            this.validDropTarget = true;
            this.dropsuccess = new i0.EventEmitter();
            this.dragOverHandler = function (event) {
                event.preventDefault();
                console.log(event);
                /** @type {?} */
                var react = (( /** @type {?} */(_this.elementRef
                    .nativeElement))).getBoundingClientRect();
                /** @type {?} */
                var dropItemStartX = event.clientX - react.left - _this._current.dragData.offsetX;
                /** @type {?} */
                var dropItemEndX = dropItemStartX + _this._current.config.componentWidth;
                /** @type {?} */
                var dropItemStartY = event.clientY - react.top - _this._current.dragData.offsetY;
                /** @type {?} */
                var dropItemEndY = dropItemStartY + _this._current.config.componentHeight;
                _this.validDropTarget = !_this.internalRegistry
                    .getAllViewContainerItem()
                    .some(function (registryItem) {
                    return (registryItem.startX < dropItemEndX &&
                        registryItem.endX > dropItemStartX &&
                        registryItem.startY < dropItemEndY &&
                        registryItem.endY > dropItemStartY);
                });
                _this._tempDropLocation.style.top = dropItemStartY + "px";
                _this._tempDropLocation.style.left = dropItemStartX + "px";
                // tslint:disable-next-line:semicolon
                _this._tempDropLocation.style.borderColor = _this.validDropTarget
                    ? "Green"
                    : "Red";
            };
        }
        /**
         * @return {?}
         */
        DroppableDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this._tempDropLocation = document.createElement("div");
                this._tempDropLocation.style.border = "2px dashed green";
                this._tempDropLocation.style.position = "absolute";
                rxjs.fromEvent(this.elementRef.nativeElement, "dragover")
                    .pipe(operators.takeWhile(function () { return _this.isAlive; }), operators.tap(function (event) { return event.preventDefault(); }), operators.distinctUntilChanged(function (event1, event2) {
                    return (event1.clientX === event2.clientX &&
                        event1.clientY === event2.clientY);
                }), operators.debounce(function () { return rxjs.timer(100); }))
                    .subscribe(this.dragOverHandler);
            };
        /**
         * @return {?}
         */
        DroppableDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.isAlive = false;
            };
        /**
         * @param {?} event
         * @return {?}
         */
        DroppableDirective.prototype.dragEnterHandler = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                event.preventDefault();
                event.dataTransfer.dropEffect = "move";
                /** @type {?} */
                var eventId = event.dataTransfer.types[0];
                /** @type {?} */
                var dragData = this.internalRegistry.getDragData(eventId);
                /** @type {?} */
                var config = this.internalRegistry.getWidgetConfig(dragData.widgetId);
                this._current = {
                    eventId: event.dataTransfer.types[0],
                    dragData: this.internalRegistry.getDragData(eventId),
                    config: this.internalRegistry.getWidgetConfig(dragData.widgetId)
                };
                this._tempDropLocation.style.height = config.componentHeight + "px";
                this._tempDropLocation.style.width = config.componentWidth + "px";
                this.renderer.appendChild(this.elementRef.nativeElement, this._tempDropLocation);
            };
        /**
         * @param {?} event
         * @return {?}
         */
        DroppableDirective.prototype.dragLeaveHandler = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                console.log("drag leave");
            };
        /**
         * @param {?} event
         * @return {?}
         */
        DroppableDirective.prototype.dropHandler = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                event.preventDefault();
                if (this.validDropTarget) {
                    /** @type {?} */
                    var dropSuccessEvent = {
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
            };
        DroppableDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: "[gDroppable]"
                    },] }
        ];
        /** @nocollapse */
        DroppableDirective.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: i0.Renderer2 },
                { type: GInternalRegistryService }
            ];
        };
        DroppableDirective.propDecorators = {
            dropsuccess: [{ type: i0.Output }],
            dragEnterHandler: [{ type: i0.HostListener, args: ["dragenter", ["$event"],] }],
            dragLeaveHandler: [{ type: i0.HostListener, args: ["dragleave", ["$event"],] }],
            dropHandler: [{ type: i0.HostListener, args: ["drop", ["$event"],] }]
        };
        return DroppableDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GComponentRegistryService = /** @class */ (function () {
        function GComponentRegistryService() {
            this.registry = new Set();
        }
        /**
         * @param {?} componentName
         * @param {?} component
         * @return {?}
         */
        GComponentRegistryService.prototype.register = /**
         * @param {?} componentName
         * @param {?} component
         * @return {?}
         */
            function (componentName, component) {
                if (this.registry[componentName]) {
                    console.warn(componentName + " already exists in registry. Will be overwriten.");
                }
                this.registry[componentName] = component;
                return this;
            };
        /**
         * @param {?} componentName
         * @return {?}
         */
        GComponentRegistryService.prototype.get = /**
         * @param {?} componentName
         * @return {?}
         */
            function (componentName) {
                return this.registry[componentName];
            };
        GComponentRegistryService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: "root"
                    },] }
        ];
        /** @nocollapse */
        GComponentRegistryService.ctorParameters = function () { return []; };
        /** @nocollapse */ GComponentRegistryService.ngInjectableDef = i0.defineInjectable({ factory: function GComponentRegistryService_Factory() { return new GComponentRegistryService(); }, token: GComponentRegistryService, providedIn: "root" });
        return GComponentRegistryService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GComponentFactoryService = /** @class */ (function () {
        function GComponentFactoryService(resolver, registry) {
            this.resolver = resolver;
            this.registry = registry;
        }
        /**
         * @param {?} componentName
         * @return {?}
         */
        GComponentFactoryService.prototype.componentFactory = /**
         * @param {?} componentName
         * @return {?}
         */
            function (componentName) {
                /** @type {?} */
                var factory = this.resolver.resolveComponentFactory(this.registry.get(componentName));
                return factory;
            };
        GComponentFactoryService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: "root"
                    },] }
        ];
        /** @nocollapse */
        GComponentFactoryService.ctorParameters = function () {
            return [
                { type: i0.ComponentFactoryResolver },
                { type: GComponentRegistryService }
            ];
        };
        /** @nocollapse */ GComponentFactoryService.ngInjectableDef = i0.defineInjectable({ factory: function GComponentFactoryService_Factory() { return new GComponentFactoryService(i0.inject(i0.ComponentFactoryResolver), i0.inject(GComponentRegistryService)); }, token: GComponentFactoryService, providedIn: "root" });
        return GComponentFactoryService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DropZoneComponent = /** @class */ (function () {
        function DropZoneComponent(gComponentFactoryService, internalRegistry) {
            this.gComponentFactoryService = gComponentFactoryService;
            this.internalRegistry = internalRegistry;
            this.update = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        DropZoneComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        /**
         * @param {?} changes
         * @return {?}
         */
        DropZoneComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if ("state" in changes && changes["state"].firstChange) {
                    for (var key in this.state.items) {
                        if (this.state.items.hasOwnProperty(key)) {
                            /** @type {?} */
                            var dropZoneItem = this.state.items[key];
                            this.projectWidgetInView(dropZoneItem.widgetId, dropZoneItem.componentName, dropZoneItem.style);
                        }
                    }
                }
            };
        /**
         * @param {?} syntheticEvent
         * @return {?}
         */
        DropZoneComponent.prototype.dropsuccessHandler = /**
         * @param {?} syntheticEvent
         * @return {?}
         */
            function (syntheticEvent) {
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
            };
        /**
         * @param {?} identifier
         * @param {?} componentName
         * @param {?} style
         * @return {?}
         */
        DropZoneComponent.prototype.projectWidgetInView = /**
         * @param {?} identifier
         * @param {?} componentName
         * @param {?} style
         * @return {?}
         */
            function (identifier, componentName, style) {
                var _this = this;
                /** @type {?} */
                var factory = this.gComponentFactoryService.componentFactory(componentName);
                /** @type {?} */
                var component = this.container.createComponent(factory);
                /** @type {?} */
                var widgetProjection = ( /** @type {?} */(component.instance));
                widgetProjection.widgetId = identifier;
                widgetProjection.style = style;
                widgetProjection._remove
                    .pipe(operators.takeWhile(function (_) { return widgetProjection.isActive; }), operators.first())
                    .subscribe(function (widgetIdentifier) {
                    _this.container.remove(_this.internalRegistry.getViewContainerItem(widgetIdentifier)
                        .viewContainerIndex);
                    _this.internalRegistry.removeViewContainerItem(widgetIdentifier);
                    delete _this.state.items[widgetIdentifier];
                    _this.state.length -= 1;
                    _this.update.emit(_this.state);
                });
                /** @type {?} */
                var computedStyle = getComputedStyle(component.location.nativeElement.children[0]);
                this.internalRegistry.addViewContainerItem(identifier, {
                    viewContainerIndex: this.container.length - 1,
                    startX: +style["left.px"],
                    startY: +style["top.px"],
                    endX: +style["left.px"] + +computedStyle.width.replace(/px/, ""),
                    endY: +style["top.px"] + +computedStyle.height.replace(/px/, "")
                });
            };
        DropZoneComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: "g-drop-zone",
                        template: "\n    <div (dropsuccess)=\"dropsuccessHandler($event)\" gDroppable>\n      <template #dropContainer></template>\n    </div>\n  ",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        styles: ["\n      div {\n        width: 100%;\n        height: 100%;\n      }\n      div * {\n        pointer-events: none;\n      }\n    "]
                    }] }
        ];
        /** @nocollapse */
        DropZoneComponent.ctorParameters = function () {
            return [
                { type: GComponentFactoryService },
                { type: GInternalRegistryService }
            ];
        };
        DropZoneComponent.propDecorators = {
            state: [{ type: i0.Input }],
            update: [{ type: i0.Output }],
            container: [{ type: i0.ViewChild, args: ["dropContainer", { read: i0.ViewContainerRef },] }]
        };
        return DropZoneComponent;
    }());

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
    var DragyModule = /** @class */ (function () {
        function DragyModule() {
        }
        DragyModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [DraggableDirective, DroppableDirective, DropZoneComponent],
                        imports: [common.CommonModule],
                        providers: [GComponentFactoryService, GInternalRegistryService],
                        exports: [DraggableDirective, DroppableDirective, DropZoneComponent]
                    },] }
        ];
        return DragyModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var IWidgetProjection = /** @class */ (function () {
        function IWidgetProjection() {
            this.isActive = true;
            this._remove = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        IWidgetProjection.prototype.remove = /**
         * @return {?}
         */
            function () {
                this._remove.emit(this.widgetId);
            };
        /**
         * @return {?}
         */
        IWidgetProjection.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.isActive = false;
            };
        IWidgetProjection.propDecorators = {
            widgetId: [{ type: i0.Input }],
            style: [{ type: i0.Input }],
            _remove: [{ type: i0.Output }]
        };
        return IWidgetProjection;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DragData = /** @class */ (function () {
        function DragData() {
        }
        return DragData;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DraggableDirectiveConfig = /** @class */ (function () {
        function DraggableDirectiveConfig() {
        }
        return DraggableDirectiveConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DropSuccessSyntheticEvent = /** @class */ (function () {
        function DropSuccessSyntheticEvent() {
        }
        return DropSuccessSyntheticEvent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DropZoneState = /** @class */ (function () {
        function DropZoneState() {
            this.length = 0;
            this.items = {};
        }
        return DropZoneState;
    }());
    var DropZoneItem = /** @class */ (function () {
        function DropZoneItem() {
        }
        return DropZoneItem;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ViewContainerItem = /** @class */ (function () {
        function ViewContainerItem() {
        }
        return ViewContainerItem;
    }());

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

    exports.DragyModule = DragyModule;
    exports.DropZoneComponent = DropZoneComponent;
    exports.DraggableDirective = DraggableDirective;
    exports.DroppableDirective = DroppableDirective;
    exports.IWidgetProjection = IWidgetProjection;
    exports.DragData = DragData;
    exports.DraggableDirectiveConfig = DraggableDirectiveConfig;
    exports.DropSuccessSyntheticEvent = DropSuccessSyntheticEvent;
    exports.DropZoneState = DropZoneState;
    exports.DropZoneItem = DropZoneItem;
    exports.ViewContainerItem = ViewContainerItem;
    exports.GComponentRegistryService = GComponentRegistryService;
    exports.ɵc = DropZoneComponent;
    exports.ɵa = DraggableDirective;
    exports.ɵb = DroppableDirective;
    exports.ɵd = GComponentFactoryService;
    exports.ɵe = GInternalRegistryService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=dragy.umd.js.map