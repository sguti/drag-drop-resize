/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, ViewContainerRef, Input, ChangeDetectionStrategy, Output, EventEmitter } from "@angular/core";
import { GComponentFactoryService } from "../../services/component-factory.service";
import { takeWhile, first } from "rxjs/operators";
import { DropZoneState } from "../../models/drop-zone.state";
import { GInternalRegistryService } from "../../services/internal-registry.service";
var DropZoneComponent = /** @class */ (function () {
    function DropZoneComponent(gComponentFactoryService, internalRegistry) {
        this.gComponentFactoryService = gComponentFactoryService;
        this.internalRegistry = internalRegistry;
        this.update = new EventEmitter();
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
        var widgetProjection = (/** @type {?} */ (component.instance));
        widgetProjection.widgetId = identifier;
        widgetProjection.style = style;
        widgetProjection._remove
            .pipe(takeWhile(function (_) { return widgetProjection.isActive; }), first())
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
        { type: Component, args: [{
                    selector: "g-drop-zone",
                    template: "\n    <div (dropsuccess)=\"dropsuccessHandler($event)\" gDroppable>\n      <template #dropContainer></template>\n    </div>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["\n      div {\n        width: 100%;\n        height: 100%;\n      }\n      div * {\n        pointer-events: none;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    DropZoneComponent.ctorParameters = function () { return [
        { type: GComponentFactoryService },
        { type: GInternalRegistryService }
    ]; };
    DropZoneComponent.propDecorators = {
        state: [{ type: Input }],
        update: [{ type: Output }],
        container: [{ type: ViewChild, args: ["dropContainer", { read: ViewContainerRef },] }]
    };
    return DropZoneComponent;
}());
export { DropZoneComponent };
if (false) {
    /** @type {?} */
    DropZoneComponent.prototype.state;
    /** @type {?} */
    DropZoneComponent.prototype.update;
    /** @type {?} */
    DropZoneComponent.prototype.container;
    /**
     * @type {?}
     * @private
     */
    DropZoneComponent.prototype.gComponentFactoryService;
    /**
     * @type {?}
     * @private
     */
    DropZoneComponent.prototype.internalRegistry;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcC16b25lLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2RyYWd5LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZHJvcC16b25lL2Ryb3Atem9uZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsU0FBUyxFQUNULGdCQUFnQixFQUNoQixLQUFLLEVBQ0wsdUJBQXVCLEVBR3ZCLE1BQU0sRUFDTixZQUFZLEVBQ2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFFcEYsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFHN0QsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFHcEY7SUEwQkUsMkJBQ1Usd0JBQWtELEVBQ2xELGdCQUEwQztRQUQxQyw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2xELHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBMEI7UUFOMUMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFpQixDQUFDO0lBT2xELENBQUM7Ozs7SUFFSixvQ0FBUTs7O0lBQVIsY0FBWSxDQUFDOzs7OztJQUNiLHVDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFdBQVcsRUFBRTtZQUN0RCxLQUFLLElBQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFO2dCQUNsQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTs7d0JBQ2xDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUss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QUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUM7WUFDaEUsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQztTQUNqRSxDQUFDLENBQUM7SUFDTCxDQUFDOztnQkF0R0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO29CQUN2QixRQUFRLEVBQUUsaUlBSVQ7b0JBWUQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07NkJBVjdDLGtJQVFDO2lCQUdKOzs7O2dCQTVCUSx3QkFBd0I7Z0JBTXhCLHdCQUF3Qjs7O3dCQXdCOUIsS0FBSzt5QkFDTCxNQUFNOzRCQUNOLFNBQVMsU0FBQyxlQUFlLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7O0lBZ0Z4RCx3QkFBQztDQUFBLEFBdkdELElBdUdDO1NBbkZZLGlCQUFpQjs7O0lBQzVCLGtDQUE4Qjs7SUFDOUIsbUNBQXFEOztJQUNyRCxzQ0FDNEI7Ozs7O0lBRzFCLHFEQUEwRDs7Ozs7SUFDMUQsNkNBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgSW5wdXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBHQ29tcG9uZW50RmFjdG9yeVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvY29tcG9uZW50LWZhY3Rvcnkuc2VydmljZVwiO1xuaW1wb3J0IHsgSVdpZGdldFByb2plY3Rpb24gfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9JV2lkZ2V0UHJvamVjdGlvblwiO1xuaW1wb3J0IHsgdGFrZVdoaWxlLCBmaXJzdCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuaW1wb3J0IHsgRHJvcFpvbmVTdGF0ZSB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZHJvcC16b25lLnN0YXRlXCI7XG5pbXBvcnQgeyBEcm9wU3VjY2Vzc1N5bnRoZXRpY0V2ZW50IH0gZnJvbSBcIi4uLy4uL21vZGVscy9kcm9wLXN1Y2Nlc3Mtc3ludGhldGljLWV2ZW50XCI7XG5pbXBvcnQgeyBHQ29tcG9uZW50UmVnaXN0cnlTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2NvbXBvbmVudC1yZWdpc3RyeS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBHSW50ZXJuYWxSZWdpc3RyeVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvaW50ZXJuYWwtcmVnaXN0cnkuc2VydmljZVwiO1xuaW1wb3J0IHsgVmlld0NvbnRhaW5lckl0ZW0gfSBmcm9tIFwiLi4vLi4vbW9kZWxzL3ZpZXctY29udGFpbmVyLWl0ZW0ubW9kZWxcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImctZHJvcC16b25lXCIsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiAoZHJvcHN1Y2Nlc3MpPVwiZHJvcHN1Y2Nlc3NIYW5kbGVyKCRldmVudClcIiBnRHJvcHBhYmxlPlxuICAgICAgPHRlbXBsYXRlICNkcm9wQ29udGFpbmVyPjwvdGVtcGxhdGU+XG4gICAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAgIGRpdiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB9XG4gICAgICBkaXYgKiB7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgfVxuICAgIGBcbiAgXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgRHJvcFpvbmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIHN0YXRlOiBEcm9wWm9uZVN0YXRlO1xuICBAT3V0cHV0KCkgdXBkYXRlID0gbmV3IEV2ZW50RW1pdHRlcjxEcm9wWm9uZVN0YXRlPigpO1xuICBAVmlld0NoaWxkKFwiZHJvcENvbnRhaW5lclwiLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSlcbiAgY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZ0NvbXBvbmVudEZhY3RvcnlTZXJ2aWNlOiBHQ29tcG9uZW50RmFjdG9yeVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBpbnRlcm5hbFJlZ2lzdHJ5OiBHSW50ZXJuYWxSZWdpc3RyeVNlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge31cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChcInN0YXRlXCIgaW4gY2hhbmdlcyAmJiBjaGFuZ2VzW1wic3RhdGVcIl0uZmlyc3RDaGFuZ2UpIHtcbiAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuc3RhdGUuaXRlbXMpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuaXRlbXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIGNvbnN0IGRyb3Bab25lSXRlbSA9IHRoaXMuc3RhdGUuaXRlbXNba2V5XTtcbiAgICAgICAgICB0aGlzLnByb2plY3RXaWRnZXRJblZpZXcoXG4gICAgICAgICAgICBkcm9wWm9uZUl0ZW0ud2lkZ2V0SWQsXG4gICAgICAgICAgICBkcm9wWm9uZUl0ZW0uY29tcG9uZW50TmFtZSxcbiAgICAgICAgICAgIGRyb3Bab25lSXRlbS5zdHlsZVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZHJvcHN1Y2Nlc3NIYW5kbGVyKHN5bnRoZXRpY0V2ZW50OiBEcm9wU3VjY2Vzc1N5bnRoZXRpY0V2ZW50KSB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5pbnRlcm5hbFJlZ2lzdHJ5LmNoZWNrVmlld0NvbnRhaW5lckl0ZW1FbnRyeShzeW50aGV0aWNFdmVudC53aWRnZXRJZClcbiAgICApIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKFwiVGhpcyB3aWRnZXQgaXMgYWxyYWR5IHBvamVjdGVkIGluIHZpZXdcIik7XG4gICAgfVxuICAgIHRoaXMucHJvamVjdFdpZGdldEluVmlldyhcbiAgICAgIHN5bnRoZXRpY0V2ZW50LndpZGdldElkLFxuICAgICAgc3ludGhldGljRXZlbnQuY29tcG9uZW50TmFtZSxcbiAgICAgIHN5bnRoZXRpY0V2ZW50LnN0eWxlXG4gICAgKTtcbiAgICB0aGlzLnN0YXRlLml0ZW1zW3N5bnRoZXRpY0V2ZW50LndpZGdldElkXSA9IHtcbiAgICAgIGNvbXBvbmVudE5hbWU6IHN5bnRoZXRpY0V2ZW50LmNvbXBvbmVudE5hbWUsXG4gICAgICBzdHlsZTogc3ludGhldGljRXZlbnQuc3R5bGUsXG4gICAgICB3aWRnZXRJZDogc3ludGhldGljRXZlbnQud2lkZ2V0SWRcbiAgICB9O1xuICAgIHRoaXMuc3RhdGUubGVuZ3RoICs9IDE7XG4gICAgdGhpcy51cGRhdGUuZW1pdCh0aGlzLnN0YXRlKTtcbiAgfVxuICBwcm9qZWN0V2lkZ2V0SW5WaWV3KFxuICAgIGlkZW50aWZpZXI6IHN0cmluZyxcbiAgICBjb21wb25lbnROYW1lOiBzdHJpbmcsXG4gICAgc3R5bGU6IG9iamVjdFxuICApIHtcbiAgICBjb25zdCBmYWN0b3J5ID0gdGhpcy5nQ29tcG9uZW50RmFjdG9yeVNlcnZpY2UuY29tcG9uZW50RmFjdG9yeShcbiAgICAgIGNvbXBvbmVudE5hbWVcbiAgICApO1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IHRoaXMuY29udGFpbmVyLmNyZWF0ZUNvbXBvbmVudChmYWN0b3J5KTtcbiAgICBjb25zdCB3aWRnZXRQcm9qZWN0aW9uID0gY29tcG9uZW50Lmluc3RhbmNlIGFzIElXaWRnZXRQcm9qZWN0aW9uO1xuICAgIHdpZGdldFByb2plY3Rpb24ud2lkZ2V0SWQgPSBpZGVudGlmaWVyO1xuICAgIHdpZGdldFByb2plY3Rpb24uc3R5bGUgPSBzdHlsZTtcbiAgICB3aWRnZXRQcm9qZWN0aW9uLl9yZW1vdmVcbiAgICAgIC5waXBlKFxuICAgICAgICB0YWtlV2hpbGUoXyA9PiB3aWRnZXRQcm9qZWN0aW9uLmlzQWN0aXZlKSxcbiAgICAgICAgZmlyc3QoKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSh3aWRnZXRJZGVudGlmaWVyID0+IHtcbiAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlKFxuICAgICAgICAgIHRoaXMuaW50ZXJuYWxSZWdpc3RyeS5nZXRWaWV3Q29udGFpbmVySXRlbSh3aWRnZXRJZGVudGlmaWVyKVxuICAgICAgICAgICAgLnZpZXdDb250YWluZXJJbmRleFxuICAgICAgICApO1xuICAgICAgICB0aGlzLmludGVybmFsUmVnaXN0cnkucmVtb3ZlVmlld0NvbnRhaW5lckl0ZW0od2lkZ2V0SWRlbnRpZmllcik7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnN0YXRlLml0ZW1zW3dpZGdldElkZW50aWZpZXJdO1xuICAgICAgICB0aGlzLnN0YXRlLmxlbmd0aCAtPSAxO1xuICAgICAgICB0aGlzLnVwZGF0ZS5lbWl0KHRoaXMuc3RhdGUpO1xuICAgICAgfSk7XG4gICAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoXG4gICAgICBjb21wb25lbnQubG9jYXRpb24ubmF0aXZlRWxlbWVudC5jaGlsZHJlblswXVxuICAgICk7XG4gICAgdGhpcy5pbnRlcm5hbFJlZ2lzdHJ5LmFkZFZpZXdDb250YWluZXJJdGVtKGlkZW50aWZpZXIsIHtcbiAgICAgIHZpZXdDb250YWluZXJJbmRleDogdGhpcy5jb250YWluZXIubGVuZ3RoIC0gMSxcbiAgICAgIHN0YXJ0WDogK3N0eWxlW1wibGVmdC5weFwiXSxcbiAgICAgIHN0YXJ0WTogK3N0eWxlW1widG9wLnB4XCJdLFxuICAgICAgZW5kWDogK3N0eWxlW1wibGVmdC5weFwiXSArICtjb21wdXRlZFN0eWxlLndpZHRoLnJlcGxhY2UoL3B4LywgXCJcIiksXG4gICAgICBlbmRZOiArc3R5bGVbXCJ0b3AucHhcIl0gKyArY29tcHV0ZWRTdHlsZS5oZWlnaHQucmVwbGFjZSgvcHgvLCBcIlwiKVxuICAgIH0pO1xuICB9XG59XG4iXX0=