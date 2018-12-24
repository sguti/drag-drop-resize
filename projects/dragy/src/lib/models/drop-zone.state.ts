import { Type } from "@angular/core";

export class DropZoneState {
  length: number;
  items: { [key: string]: DropZoneItem };
  constructor() {
    this.length = 0;
    this.items = {};
  }
}

export class DropZoneItem {
  widgetId: string;
  style: object;
  componentName: string;
}
