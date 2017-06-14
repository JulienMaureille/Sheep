/**
 * Created by Julien on 13/06/2017.
 */
import {Injectable} from "@angular/core";
import {Headers, Http, RequestOptions, Response} from "@angular/http";

import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import {URLAI, URLSERVER} from "shared/constants/urls";
import {AI_TOK} from "../../../constants/auth";
import {MessageModel} from "../../../models/MessageModel";


@Injectable()
export class AIService {

  private url;

  constructor(private http: Http) {
    this.url = URLAI;
  }

  public getAIResponse(str: string, route: string) {

    str = str.substring(3);
    const finalUrl = this.url + "query" + "?v=20150910&query=" + str + "&timezone=Europe/Paris&lang=fr&sessionId=aGjdl58Hopd6PFM6";

    const headers = new Headers({"Content-Type": "application/json"});
    headers.append("Authorization", "Bearer " + AI_TOK);
    const options = new RequestOptions({headers: headers});

    const query: Array<string> = [];
    query.concat(str);

    if (str.length < 256) {
      this.http.get(finalUrl, options).subscribe((data) => {

        const speech = data.json().result.fulfillment.messages[0].speech;
        const mess = new MessageModel(0, speech, "bot");
        this.letBotSay(mess, route);

      });

    }
  }

  public letBotSay(message: MessageModel, route: string) {
    const finalUrl = URLSERVER + route;
    const headers = new Headers({"Content-Type": "application/json"});
    const options = new RequestOptions({headers: headers});

    this.http.post(finalUrl, message, options)
      .subscribe((response) => this.extractMessageAndGetMessages(response, route));
  }

  private extractMessageAndGetMessages(response: Response, route: string): MessageModel {
    const responseBody = response.json();
    return new MessageModel(responseBody.id, responseBody.content, responseBody.from, responseBody.createdAt,
      responseBody.updatedAt, responseBody.threadId);
    // A remplacer ! On retourne ici un messageModel vide seulement pour que Typescript ne lève pas d'erreur !
  }
}
