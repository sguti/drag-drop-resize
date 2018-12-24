import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DummyComponent } from "./components/dummy/dummy.component";
import { DragyModule, GComponentRegistryService } from "dragy";

@NgModule({
  declarations: [AppComponent, DummyComponent],
  imports: [BrowserModule, AppRoutingModule, DragyModule],
  providers: [GComponentRegistryService],
  bootstrap: [AppComponent],
  entryComponents: [DummyComponent]
})
export class AppModule {}
