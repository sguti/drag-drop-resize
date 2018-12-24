import { Component } from "@angular/core";
import { DropZoneState, GComponentRegistryService } from "dragy";
import { DummyComponent } from "./components/dummy/dummy.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "drag-drop-resize";
  state: DropZoneState;
  constructor(private componentRegistry: GComponentRegistryService) {
    this.componentRegistry
      .register("DummyComponent", DummyComponent)
      .register("DummyComponent", DummyComponent);
    this.state =
      (localStorage.getItem("state") &&
        JSON.parse(localStorage.getItem("state"))) ||
      new DropZoneState();
  }
  stateUpdate(state: DropZoneState) {
    this.state = state;
    localStorage.setItem("state", JSON.stringify(state));
  }
}
