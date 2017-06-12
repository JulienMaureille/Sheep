/**
 * Created by Julien on 12/06/2017.
 */
import { Component, OnInit } from "@angular/core";

import { ThreadService } from "../../../shared/services/thread/thread.service";
import { ThreadModel } from "../../../shared/models/ThreadModel";

@Component({
    selector: "app-thread-list",
    templateUrl: "./thread-list.component.html",
    styleUrls: ["./thread-list.component.css"]
})
export class ThreadListComponent implements OnInit {

    public threadList: ThreadModel[];

    constructor(private threadService: ThreadService) {

    }

    ngOnInit() {
        this.threadService.getThreads();
        this.threadService.threadList$.subscribe((threads) => this.threadList = threads);
    }

}

