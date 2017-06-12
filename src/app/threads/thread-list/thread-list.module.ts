/**
 * Created by Julien on 12/06/2017.
 */
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ThreadListComponent } from "./thread-list.component";
import { ThreadModule } from "../thread";
import {ThreadService} from "../../../shared/services/thread/thread.service";
import {ThreadComponent} from "../thread/thread.component";

@NgModule({
    declarations: [
        ThreadListComponent,
        ThreadComponent
    ],
    imports: [
        CommonModule,
        ThreadModule

    ],
    exports: [ThreadListComponent],
    providers: [ThreadService]
})
export class ThreadListModule { }
