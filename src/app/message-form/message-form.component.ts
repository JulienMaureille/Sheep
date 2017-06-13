import {Component, OnInit} from "@angular/core";

import {MessageService} from "../../shared/services";
import {MessageModel} from "../../shared/models/MessageModel";
import {CurrentThreadModel} from "../../shared/models/CurrentThreadModel";

@Component({
  selector: "app-message-form",
  templateUrl: "./message-form.component.html",
  styleUrls: ["./message-form.component.css"]
})
export class MessageFormComponent implements OnInit {

  public message: MessageModel;
  private route: string;
  public historiqueMsg = "Show older messages";

  constructor(private messageService: MessageService) {
    this.message = new MessageModel(1, "Blabla", "anonymous");
    this.route = new CurrentThreadModel().getMessagesRoute();
  }

  ngOnInit() {
  }

  /**
   * Fonction pour envoyer un message.
   * L'envoi du message se fait à travers la methode sendMessage du service MessageService.
   * Cette méthode prend en paramètre la route pour envoyer un message (:id/messages avec id un entier correspondant à l'id du channel)
   * ainsi que le message à envoyer. Ce dernier correspond à l'objet MessageModel que l'utilisateur rempli à travers l'input.
   */
  sendMessage() {
    this.messageService.sendMessage(new CurrentThreadModel().getMessagesRoute(), this.message);
  }

  displayOlderMessages() {
    if (this.historiqueMsg == "Afficher les anciens messages") {
      this.historiqueMsg = "Retour";
      this.messageService.getOlderMessages();
    }
    else {
      this.historiqueMsg = "Afficher les anciens messages";
      this.messageService.startInterval();
    }
  }
}
