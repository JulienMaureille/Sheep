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
    const youtube = new RegExp("https?://(www\.)?(youtube\.com|youtu\.be)/[^ \t\n]+");
    const insta = new RegExp("https?://(www\.)?(instagram\.com|instagr\.am)/p/[^ \t\n\./]+");
    const twitter = new RegExp("http(s)?://(www\.)?(twitter\.com)/[^\t\n\./]+/status/[^\t\n\./]+");
    const re = new RegExp("(" + youtube.source + ")|(" + insta.source + ")|(" + twitter.source + ")");

    if (this.message.content.match(re)) {
      console.log(this.message.content);
      this.url = true;
    }
    const pattern = new RegExp("https://.*[^\t\n ]*");
    this.text = pattern.exec(this.message.content);

  }

  private isOnlyEmoji() {
    if (this.message.content && this.message.content.match("([:;][D)op])|<3|xd"))
      return true;
    return false;
  }

  private replacer(substring: string, ...args: any[]) {
    return this.http.get(substring).map((reponse) => {
      return reponse.headers.get("Content-Type").toString;
    });
  }
}
