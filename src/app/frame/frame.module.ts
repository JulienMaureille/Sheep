import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { FrameComponent} from "./frame.component";

@NgModule({
  declarations: [
    FrameComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [FrameComponent],
  providers: []
})
export class FrameModule { }
