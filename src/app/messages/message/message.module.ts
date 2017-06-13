import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { MessageComponent } from "./message.component";
import {AIService} from "../../../shared/services/extern/ai/ai.service";

@NgModule({
  declarations: [
    MessageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [MessageComponent],
  providers: [AIService]
})
export class MessageModule { }
