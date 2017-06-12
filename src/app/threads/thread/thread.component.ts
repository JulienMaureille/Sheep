import { Component, Input, OnInit } from "@angular/core";

import { ThreadModel } from "../../../shared/models/ThreadModel";
import {MessageService} from "../../../shared/services/message/message.service";

@Component({
    selector: "app-thread",
    templateUrl: "./thread.component.html",
    styleUrls: ["./thread.component.css"]
})
export class ThreadComponent implements OnInit {

    @Input() thread: ThreadModel;

    constructor(private messageService : MessageService) {
        //this.thread = new ThreadModel(0, "Hello!");
    }
    /**
     * Fonction ngOnInit.
     * Cette fonction est appelée après l'execution de tous les constructeurs de toutes les classes typescript.
     * Cette dernière s'avère très utile lorsque l'on souhaite attendre des valeurs venant de d'autres composants.
     * Notre composant qui prend en @Input un message. Les @Input ne sont accessibles uniquement à partir du ngOnInit,
     * pas dans le constructeur. Si vous souhaitez manipuler votre message lors du chargement du composant, vous devez
     * le faire dans le ngOnInit.
     */
    ngOnInit() { }

    changeThread(){
        console.log(this.thread.id);
        this.messageService.getMessages(this.thread.id+"\\messages");
    }

}
