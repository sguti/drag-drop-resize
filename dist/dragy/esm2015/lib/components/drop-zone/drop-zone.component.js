/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, ViewContainerRef, Input, ChangeDetectionStrategy, Output, EventEmitter } from "@angular/core";
import { GComponentFactoryService } from "../../services/component-factory.service";
import { takeWhile, first } from "rxjs/operators";
import { DropZoneState } from "../../models/drop-zone.state";
import { GInternalRegistryService } from "../../services/internal-registry.service";
export class DropZoneComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcC16b25lLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2RyYWd5LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZHJvcC16b25lL2Ryb3Atem9uZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsU0FBUyxFQUNULGdCQUFnQixFQUNoQixLQUFLLEVBQ0wsdUJBQXVCLEVBR3ZCLE1BQU0sRUFDTixZQUFZLEVBQ2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFFcEYsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFHN0QsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUF1QnBGLE1BQU0sT0FBTyxpQkFBaUI7Ozs7O0lBTTVCLFlBQ1Usd0JBQWtELEVBQ2xELGdCQUEwQztRQUQxQyw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2xELHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBMEI7UUFOMUMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFpQixDQUFDO0lBT2xELENBQUM7Ozs7SUFFSixRQUFRLEtBQUksQ0FBQzs7Ozs7SUFDYixXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxPQUFPLElBQUksT0FBTyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxXQUFXLEVBQUU7WUFDdEQsS0FBSyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRTtnQkFDbEMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7OzBCQUNsQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxL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TyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUM7WUFDaEUsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQztTQUNqRSxDQUFDLENBQUM7SUFDTCxDQUFDOzs7WUF0R0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUU7Ozs7R0FJVDtnQkFZRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTt5QkFWN0M7Ozs7Ozs7O0tBUUM7YUFHSjs7OztZQTVCUSx3QkFBd0I7WUFNeEIsd0JBQXdCOzs7b0JBd0I5QixLQUFLO3FCQUNMLE1BQU07d0JBQ04sU0FBUyxTQUFDLGVBQWUsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTs7OztJQUZ0RCxrQ0FBOEI7O0lBQzlCLG1DQUFxRDs7SUFDckQsc0NBQzRCOzs7OztJQUcxQixxREFBMEQ7Ozs7O0lBQzFELDZDQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIElucHV0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgR0NvbXBvbmVudEZhY3RvcnlTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2NvbXBvbmVudC1mYWN0b3J5LnNlcnZpY2VcIjtcbmltcG9ydCB7IElXaWRnZXRQcm9qZWN0aW9uIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvSVdpZGdldFByb2plY3Rpb25cIjtcbmltcG9ydCB7IHRha2VXaGlsZSwgZmlyc3QgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcbmltcG9ydCB7IERyb3Bab25lU3RhdGUgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2Ryb3Atem9uZS5zdGF0ZVwiO1xuaW1wb3J0IHsgRHJvcFN1Y2Nlc3NTeW50aGV0aWNFdmVudCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZHJvcC1zdWNjZXNzLXN5bnRoZXRpYy1ldmVudFwiO1xuaW1wb3J0IHsgR0NvbXBvbmVudFJlZ2lzdHJ5U2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9jb21wb25lbnQtcmVnaXN0cnkuc2VydmljZVwiO1xuaW1wb3J0IHsgR0ludGVybmFsUmVnaXN0cnlTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2ludGVybmFsLXJlZ2lzdHJ5LnNlcnZpY2VcIjtcbmltcG9ydCB7IFZpZXdDb250YWluZXJJdGVtIH0gZnJvbSBcIi4uLy4uL21vZGVscy92aWV3LWNvbnRhaW5lci1pdGVtLm1vZGVsXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJnLWRyb3Atem9uZVwiLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgKGRyb3BzdWNjZXNzKT1cImRyb3BzdWNjZXNzSGFuZGxlcigkZXZlbnQpXCIgZ0Ryb3BwYWJsZT5cbiAgICAgIDx0ZW1wbGF0ZSAjZHJvcENvbnRhaW5lcj48L3RlbXBsYXRlPlxuICAgIDwvZGl2PlxuICBgLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICBkaXYge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgfVxuICAgICAgZGl2ICoge1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgIH1cbiAgICBgXG4gIF0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIERyb3Bab25lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBzdGF0ZTogRHJvcFpvbmVTdGF0ZTtcbiAgQE91dHB1dCgpIHVwZGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8RHJvcFpvbmVTdGF0ZT4oKTtcbiAgQFZpZXdDaGlsZChcImRyb3BDb250YWluZXJcIiwgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pXG4gIGNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGdDb21wb25lbnRGYWN0b3J5U2VydmljZTogR0NvbXBvbmVudEZhY3RvcnlTZXJ2aWNlLFxuICAgIHByaXZhdGUgaW50ZXJuYWxSZWdpc3RyeTogR0ludGVybmFsUmVnaXN0cnlTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpIHt9XG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoXCJzdGF0ZVwiIGluIGNoYW5nZXMgJiYgY2hhbmdlc1tcInN0YXRlXCJdLmZpcnN0Q2hhbmdlKSB7XG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLnN0YXRlLml0ZW1zKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLml0ZW1zLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICBjb25zdCBkcm9wWm9uZUl0ZW0gPSB0aGlzLnN0YXRlLml0ZW1zW2tleV07XG4gICAgICAgICAgdGhpcy5wcm9qZWN0V2lkZ2V0SW5WaWV3KFxuICAgICAgICAgICAgZHJvcFpvbmVJdGVtLndpZGdldElkLFxuICAgICAgICAgICAgZHJvcFpvbmVJdGVtLmNvbXBvbmVudE5hbWUsXG4gICAgICAgICAgICBkcm9wWm9uZUl0ZW0uc3R5bGVcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGRyb3BzdWNjZXNzSGFuZGxlcihzeW50aGV0aWNFdmVudDogRHJvcFN1Y2Nlc3NTeW50aGV0aWNFdmVudCkge1xuICAgIGlmIChcbiAgICAgIHRoaXMuaW50ZXJuYWxSZWdpc3RyeS5jaGVja1ZpZXdDb250YWluZXJJdGVtRW50cnkoc3ludGhldGljRXZlbnQud2lkZ2V0SWQpXG4gICAgKSB7XG4gICAgICByZXR1cm4gY29uc29sZS5lcnJvcihcIlRoaXMgd2lkZ2V0IGlzIGFscmFkeSBwb2plY3RlZCBpbiB2aWV3XCIpO1xuICAgIH1cbiAgICB0aGlzLnByb2plY3RXaWRnZXRJblZpZXcoXG4gICAgICBzeW50aGV0aWNFdmVudC53aWRnZXRJZCxcbiAgICAgIHN5bnRoZXRpY0V2ZW50LmNvbXBvbmVudE5hbWUsXG4gICAgICBzeW50aGV0aWNFdmVudC5zdHlsZVxuICAgICk7XG4gICAgdGhpcy5zdGF0ZS5pdGVtc1tzeW50aGV0aWNFdmVudC53aWRnZXRJZF0gPSB7XG4gICAgICBjb21wb25lbnROYW1lOiBzeW50aGV0aWNFdmVudC5jb21wb25lbnROYW1lLFxuICAgICAgc3R5bGU6IHN5bnRoZXRpY0V2ZW50LnN0eWxlLFxuICAgICAgd2lkZ2V0SWQ6IHN5bnRoZXRpY0V2ZW50LndpZGdldElkXG4gICAgfTtcbiAgICB0aGlzLnN0YXRlLmxlbmd0aCArPSAxO1xuICAgIHRoaXMudXBkYXRlLmVtaXQodGhpcy5zdGF0ZSk7XG4gIH1cbiAgcHJvamVjdFdpZGdldEluVmlldyhcbiAgICBpZGVudGlmaWVyOiBzdHJpbmcsXG4gICAgY29tcG9uZW50TmFtZTogc3RyaW5nLFxuICAgIHN0eWxlOiBvYmplY3RcbiAgKSB7XG4gICAgY29uc3QgZmFjdG9yeSA9IHRoaXMuZ0NvbXBvbmVudEZhY3RvcnlTZXJ2aWNlLmNvbXBvbmVudEZhY3RvcnkoXG4gICAgICBjb21wb25lbnROYW1lXG4gICAgKTtcbiAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzLmNvbnRhaW5lci5jcmVhdGVDb21wb25lbnQoZmFjdG9yeSk7XG4gICAgY29uc3Qgd2lkZ2V0UHJvamVjdGlvbiA9IGNvbXBvbmVudC5pbnN0YW5jZSBhcyBJV2lkZ2V0UHJvamVjdGlvbjtcbiAgICB3aWRnZXRQcm9qZWN0aW9uLndpZGdldElkID0gaWRlbnRpZmllcjtcbiAgICB3aWRnZXRQcm9qZWN0aW9uLnN0eWxlID0gc3R5bGU7XG4gICAgd2lkZ2V0UHJvamVjdGlvbi5fcmVtb3ZlXG4gICAgICAucGlwZShcbiAgICAgICAgdGFrZVdoaWxlKF8gPT4gd2lkZ2V0UHJvamVjdGlvbi5pc0FjdGl2ZSksXG4gICAgICAgIGZpcnN0KClcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUod2lkZ2V0SWRlbnRpZmllciA9PiB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZShcbiAgICAgICAgICB0aGlzLmludGVybmFsUmVnaXN0cnkuZ2V0Vmlld0NvbnRhaW5lckl0ZW0od2lkZ2V0SWRlbnRpZmllcilcbiAgICAgICAgICAgIC52aWV3Q29udGFpbmVySW5kZXhcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5pbnRlcm5hbFJlZ2lzdHJ5LnJlbW92ZVZpZXdDb250YWluZXJJdGVtKHdpZGdldElkZW50aWZpZXIpO1xuICAgICAgICBkZWxldGUgdGhpcy5zdGF0ZS5pdGVtc1t3aWRnZXRJZGVudGlmaWVyXTtcbiAgICAgICAgdGhpcy5zdGF0ZS5sZW5ndGggLT0gMTtcbiAgICAgICAgdGhpcy51cGRhdGUuZW1pdCh0aGlzLnN0YXRlKTtcbiAgICAgIH0pO1xuICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKFxuICAgICAgY29tcG9uZW50LmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bMF1cbiAgICApO1xuICAgIHRoaXMuaW50ZXJuYWxSZWdpc3RyeS5hZGRWaWV3Q29udGFpbmVySXRlbShpZGVudGlmaWVyLCB7XG4gICAgICB2aWV3Q29udGFpbmVySW5kZXg6IHRoaXMuY29udGFpbmVyLmxlbmd0aCAtIDEsXG4gICAgICBzdGFydFg6ICtzdHlsZVtcImxlZnQucHhcIl0sXG4gICAgICBzdGFydFk6ICtzdHlsZVtcInRvcC5weFwiXSxcbiAgICAgIGVuZFg6ICtzdHlsZVtcImxlZnQucHhcIl0gKyArY29tcHV0ZWRTdHlsZS53aWR0aC5yZXBsYWNlKC9weC8sIFwiXCIpLFxuICAgICAgZW5kWTogK3N0eWxlW1widG9wLnB4XCJdICsgK2NvbXB1dGVkU3R5bGUuaGVpZ2h0LnJlcGxhY2UoL3B4LywgXCJcIilcbiAgICB9KTtcbiAgfVxufVxuIl19