import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DraggableDirective, DroppableDirective } from "./directives";
import { DropZoneComponent } from "./components";
import { GInternalRegistryService, GComponentFactoryService } from "./services";

@NgModule({
  declarations: [DraggableDirective, DroppableDirective, DropZoneComponent],
  imports: [CommonModule],
  providers: [GComponentFactoryService, GInternalRegistryService],
  exports: [DraggableDirective, DroppableDirective, DropZoneComponent]
})
export class DragyModule {}
