import {Component, Input, OnInit} from "@angular/core";

import {ThreadModel} from "../../../shared/models/ThreadModel";
import {MessageService} from "../../../shared/services/message/message.service";
import {CurrentThreadModel} from "../../../shared/models/CurrentThreadModel";
import {ThreadService} from "../../../shared/services/thread/thread.service";

@Component({
  selector: "app-thread",
  templateUrl: "./thread.component.html",
  styleUrls: ["./thread.component.css"]
})
export class ThreadComponent implements OnInit {

  @Input() thread: ThreadModel;

  constructor(private messageService: MessageService, private threadService: ThreadService) {

  }

  /**
   * Fonction ngOnInit.
   * Cette fonction est appelée après l'execution de tous les constructeurs de toutes les classes typescript.
   * Cette dernière s'avère très utile lorsque l'on souhaite attendre des valeurs venant de d'autres composants.
   * Notre composant qui prend en @Input un message. Les @Input ne sont accessibles uniquement à partir du ngOnInit,
   * pas dans le constructeur. Si vous souhaitez manipuler votre message lors du chargement du composant, vous devez
   * le faire dans le ngOnInit.
   */
  ngOnInit() {
  }

  isCurrent() {
    return this.thread.id === new CurrentThreadModel().getId();
  }

  removeThread() {
    this.changeThreadId(1);
    this.threadService.removeThread(this.thread.id);
  }

  changeThreadId(id: number) {
    const currentThread = new CurrentThreadModel();
    currentThread.switchThread(id);

    this.messageService.startInterval();
  }

  changeThread() {
    this.changeThreadId(this.thread.id);
  }

}
