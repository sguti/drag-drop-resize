export declare class DropZoneState {
    length: number;
    items: {
        [key: string]: DropZoneItem;
    };
    constructor();
}
export declare class DropZoneItem {
    widgetId: string;
    style: object;
    componentName: string;
}
