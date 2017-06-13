import {Component, Input, OnInit} from "@angular/core";

import {MessageModel} from "../../../shared/models/MessageModel";
import {Http} from "@angular/http";

@Component({
  selector: "app-message",
  templateUrl: "./message.component.html",
  styleUrls: ["./message.component.css"]
})
export class MessageComponent implements OnInit {

  @Input() message: MessageModel;
  private text: string[];
  public url: boolean;


  constructor(private http: Http) {
    this.message = new MessageModel(0, "Hello!");
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
    if (this.message.content.match(".*http.*")) {
      this.url = true;
    }
    const pattern = new RegExp("https://.*[^\t\n ]*");
    this.text = pattern.exec(this.message.content);

  }

  private isOnlyEmoji(){
    return this.message.content.match("([:;][D)op])|<3|xd");
  }

  private replacer(substring: string, ...args: any[]) {
    return this.http.get(substring).map((reponse) => {
      return reponse.headers.get("Content-Type").toString;
    });
  }
}
