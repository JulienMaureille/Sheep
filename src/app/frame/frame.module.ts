import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { FrameComponent} from "./frame.component";
import {IframeHeightDirective} from "../../shared/directives/iframe.directive";

@NgModule({
  declarations: [
    FrameComponent,
    IframeHeightDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [FrameComponent],
  providers: []
})
export class FrameModule { }

