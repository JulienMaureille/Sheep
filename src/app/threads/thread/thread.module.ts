import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ThreadComponent } from "./thread.component";

@NgModule({
    declarations: [
        ThreadComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [ThreadComponent],
    providers: []
})
export class ThreadModule { }
