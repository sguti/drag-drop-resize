import { DraggableDirectiveConfig } from "../models/draggable-directive.config";
import { DragData } from "../models/drag-data.model";
import { ViewContainerItem } from "../models/view-container-item.model";
export declare class GInternalRegistryService {
    constructor();
    private widgetRegistry;
    private dragEventRegistry;
    private viewContainerRegistry;
    registerWidget(config: DraggableDirectiveConfig): boolean;
    unRegisterWidget(widgetId: string): boolean;
    getWidgetConfig(widgetId: string): DraggableDirectiveConfig;
    addDragData(dragId: string, dragData: DragData): void;
    getDragData(dragId: string): DragData;
    clearDragData(dragId: string): boolean;
    addViewContainerItem(identifier: string, entry: ViewContainerItem): void;
    getViewContainerItem(identifer: string): ViewContainerItem;
    getAllViewContainerItem(): ViewContainerItem[];
    removeViewContainerItem(identifer: string): boolean;
    checkViewContainerItemEntry(identifer: string): boolean;
}
