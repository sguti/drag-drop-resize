import { Component, OnInit } from "@angular/core";
import { IWidgetProjection } from "dragy";

@Component({
  selector: "g-dummy",
  templateUrl: "./dummy.component.html",
  styleUrls: ["./dummy.component.scss"]
})
export class DummyComponent extends IWidgetProjection implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {}
  clickhandler() {
    alert(this.widgetId);
  }
}
