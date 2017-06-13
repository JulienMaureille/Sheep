import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { MessageComponent } from "./message.component";
import {FrameComponent} from "../../frame/frame.component";

@NgModule({
  declarations: [
    MessageComponent,
    FrameComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [MessageComponent],
  providers: []
})
export class MessageModule { }
