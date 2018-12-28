import { EventEmitter, OnDestroy } from "@angular/core";
export declare class IWidgetProjection implements OnDestroy {
    isActive: boolean;
    widgetId: string;
    style: object;
    _remove: EventEmitter<string>;
    remove(): void;
    ngOnDestroy(): void;
}
