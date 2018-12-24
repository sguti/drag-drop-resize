import { Injectable } from "@angular/core";
import { DraggableDirectiveConfig } from "../models/draggable-directive.config";
import { DragData } from "../models/drag-data.model";
import { ViewContainerItem } from "../models/view-container-item.model";

@Injectable({
  providedIn: "root"
})
export class GInternalRegistryService {
  constructor() {}
  private widgetRegistry: { [key: string]: DraggableDirectiveConfig } = {};
  private dragEventRegistry: { [key: string]: DragData } = {};
  private viewContainerRegistry: {
    [key: string]: ViewContainerItem;
  } = {};
  registerWidget(config: DraggableDirectiveConfig): boolean {
    if (!config.widgetId || this.widgetRegistry[config.widgetId]) {
      return false;
    }
    this.widgetRegistry[config.widgetId] = config;
    return true;
  }
  unRegisterWidget(widgetId: string): boolean {
    return delete this.widgetRegistry[widgetId];
  }
  getWidgetConfig(widgetId: string): DraggableDirectiveConfig {
    return this.widgetRegistry[widgetId];
  }
  addDragData(dragId: string, dragData: DragData) {
    this.dragEventRegistry[dragId] = dragData;
  }
  getDragData(dragId: string): DragData {
    return this.dragEventRegistry[dragId];
  }
  clearDragData(dragId: string): boolean {
    return delete this.dragEventRegistry[dragId];
  }
  addViewContainerItem(identifier: string, entry: ViewContainerItem) {
    this.viewContainerRegistry[identifier] = entry;
  }
  getViewContainerItem(identifer: string): ViewContainerItem {
    return this.viewContainerRegistry[identifer];
  }
  getAllViewContainerItem(): ViewContainerItem[] {
    return Object.keys(this.viewContainerRegistry).map(
      key => this.viewContainerRegistry[key]
    );
  }
  removeViewContainerItem(identifer: string): boolean {
    return delete this.viewContainerRegistry[identifer];
  }
  checkViewContainerItemEntry(identifer: string) {
    return identifer in this.viewContainerRegistry;
  }
}
