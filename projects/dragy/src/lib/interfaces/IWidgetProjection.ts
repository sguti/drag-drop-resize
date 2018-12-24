import { Output, EventEmitter, Input, OnDestroy } from "@angular/core";

export class IWidgetProjection implements OnDestroy {
  isActive = true;
  @Input() widgetId: string;
  @Input() style: object;
  @Output() _remove = new EventEmitter<string>();
  remove() {
    this._remove.emit(this.widgetId);
  }
  ngOnDestroy(): void {
    this.isActive = false;
  }
}
