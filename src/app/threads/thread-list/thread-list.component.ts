/**
 * Created by Julien on 12/06/2017.
 */
import { Component, OnInit } from "@angular/core";

import { ThreadService } from "../../../shared/services/thread/thread.service";
import { ThreadModel } from "../../../shared/models/ThreadModel";
import {current} from "codelyzer/util/syntaxKind";

@Component({
    selector: "app-thread-list",
    templateUrl: "./thread-list.component.html",
    styleUrls: ["./thread-list.component.css"]
})
export class ThreadListComponent implements OnInit {
    previousDisabled: boolean;
    public threadList: ThreadModel[];
    public ech: ThreadModel[];
    public threadName: string;
    private currentPage: number;
    private nextDisabled: boolean;
    constructor(private threadService: ThreadService) {
      this.currentPage = 0;
      this.nextDisabled = true;
      this.previousDisabled = true;

    }

    ngOnInit() {
      this.threadService.getThreads();
      this.threadService.threadList$.subscribe((threads) => {
        this.threadList = threads;
        this.nextDisabled = this.threadList.length === 0;
        this.previousDisabled = this.currentPage === 0;
      } );
    }


  addThread() {
        this.threadService.addThread(new ThreadModel(50, this.threadName));
        this.threadService.getThreads();
  }

  nextPage() {
    this.threadService.getThreadsFromPage(++this.currentPage);
  }

  previousPage() {
    this.threadService.getThreadsFromPage(--this.currentPage);
  }

}

