import {Injectable} from "@angular/core";
import {Headers, Http, RequestOptions, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";

import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import {URLSERVER} from "shared/constants/urls";
import {MessageModel} from "../../models/MessageModel";
import {ReplaySubject} from "rxjs/ReplaySubject";
import {CurrentThreadModel} from "../../models/CurrentThreadModel";
import {AIService} from "../extern/ai/ai.service";
import {LoginService} from "../login/login.service";

@Injectable()
export class MessageService {

  /**
   * Url pour accéder aux données. L'url est commun à toutes les fonctions du service.
   * Il permet d'accéder aux channels. À partir de cet url, vous pourrez accéder aux messages.
   * La documentation des methodes du service permet d'avoir plus d'information concernant la façon d'accèder aux messages.
   */
  private url: string;

  /**
   * MessageList$ est un type d'Observable particulier appelé ReplaySubject.
   * MessageList$ est un flux d'évenements qui stock la liste des messages. A chaque fois que l'on fait une requète
   * pour récupérer la liste des messages, messageList$ va pousser cette nouvelle liste dans son flux pour permettre
   * aux composants qui l'écoutent de récupérer les messages. Pour plus d'infos sur les observables, voir le README.md du projet
   * dans lequel vous trouverez une première explication sur les observables ainsi qu'une vidéo tutoriel.
   */
  public messageList$: ReplaySubject<MessageModel[]>;
  private interval: any;

  constructor(private http: Http, private ai: AIService, private loginService: LoginService) {
    this.url = URLSERVER;
    this.messageList$ = new ReplaySubject(20);
    this.messageList$.next([]);
    this.startInterval();
  }


  public startInterval() {
    if (this.interval) {
      clearInterval(this.interval);
    }
    this.getMessages(new CurrentThreadModel().getMessagesRoute());
    this.interval = setInterval(() => (this.getMessages(new CurrentThreadModel().getMessagesRoute())), 1000);
  }

  /**
   * Fonction getMessage.
   * Cette fonction permet de récupérer la liste des messages pour un channel donné. Elle prend en parametre:
   * - route: La route. C'est la fin de l'url. Elle sera concaténée à l'attribut this.url pour former l'url complète.
   *          Pour l'envoie des messages la route doit avoir la structure suivante: :id/messages avec ":id" étant
   *          un nombre entier correspondant à l'identifiant (id) du channel.
   * Exemple de route: 1/messages
   * @param route
   * @returns {Observable<R>}
   */
  public getMessages(route: string) {
    const finalUrl = this.url + route;
    console.log(finalUrl);
    this.http.get(finalUrl)
      .subscribe((response) => this.extractAndUpdateMessageList(response));
  }

  public getOlderMessages(route: string) {
    CurrentThreadModel.lastMessageId = -1;
    this.getMessages(route);
    clearInterval(this.interval);
  }

  syntaxAnalyser(message: MessageModel, route: string) {
    const checkAI = /^((\/ai)|(\\ai))( .)+/;
    if (checkAI.test(message.content)) {
      this.ai.getAIResponse(message.content, route);
    }
    const checkDirect = /(jacques)/;
    if (checkDirect.test(message.content)) {
      this.ai.letBotSay(new MessageModel(0, "CHIRAC", "bot"), route);
    }
  }

  /**
   * Fonction sendMessage.
   * Cette fonction permet l'envoi d'un message. Elle prend en paramêtre:
   * - route: La route est la fin de l'url. Elle sera concaténée à l'attribut this.url pour former l'url complète. Pour
   *          l'envoie des messages la route doit avoir la structure suivante: :id/messages avec ":id" étant un nombre
   *          entier correspondant à l'identifiant (id) du channel.
   *          Exemple de route: 1/messages
   * - message: Le message à envoyer. Ce message est de type MessageModel.
   * @param route
   * @param message
   */
  public sendMessage(route: string, message: MessageModel) {
    const finalUrl = this.url + route;
    message.from = this.loginService.getUser();
    const headers = new Headers({"Content-Type": "application/json"});

    const ma = message.content.match(/^scheduleAt #[^ ]+ @(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2})-(\d{1,2})-(\d{1,2})/);
    if (ma != null) {
      // headers.append("ScheduleAt", new Date(ma[0]).toDateString());
      message.content = ma[0] + " founded ";
    }
    const options = new RequestOptions({headers: headers});

    this.http.post(finalUrl, message, options)
      .subscribe((response) => this.extractMessageAndGetMessages(response, route));

    this.syntaxAnalyser(message, route);

  }

  /**
   * Fonction extractAndUpdateMessageList.
   * Cette fonction permet d'extraire la liste des messages de la 'response' reçue et ensuite de mettre à jour la liste
   * des message dans l'observable messageList$.
   * Elle est appelée dans la fonction getMessages et permet de directement récuperer une liste de MessageModel. Pour récupérer
   * les données de la reponse, il suffit d'appeler la fonction .json() qui retourne le body de la réponse.
   * @param response
   */
  extractAndUpdateMessageList(response: Response) {
    // Plus d'info sur Response ou sur la fonction .json()? si tu utilises Webstorm,
    // fait CTRL + Click pour voir la déclaration et la documentation
    const messageList = response.json() || []; // ExtractMessage: Si response.json() est undefined ou null,
    // messageList prendra la valeur tableau vide: []
    // console.log(messageList.length);
    // console.log(CurrentThreadModel.lastMessageId);
    // console.log(messageList[messageList.length - 1].id);
    if (messageList.length > 0) {
      if (messageList[messageList.length - 1].id > CurrentThreadModel.lastMessageId) {
        // console.log(response.json());
        CurrentThreadModel.lastMessageId = messageList[messageList.length - 1].id;
        this.messageList$.next(messageList); // On pousse les nouvelles données dans l'attribut messageList$
      }
    } else {
      this.messageList$.next(messageList);
    }
  }

  /**
   * Fonction extractMessage.
   * Cette fonction permet d'extraire les données reçues à travers les requêtes HTTP. Elle est appelée dans la fonction
   * sendMessage et permet de directement récuperer un MessageModel.
   * Elle va également faire un nouvel appel pour récupérer la liste complete des messages pour pouvoir mettre à jour la
   * liste des messages dans les composants.
   * @param response
   * @param route
   * @returns {any|{}}
   */
  private extractMessageAndGetMessages(response: Response, route: string): MessageModel {
    this.getMessages(route);
    const responseBody = response.json();
    return new MessageModel(responseBody.id, responseBody.content, responseBody.from, responseBody.createdAt,
      responseBody.updatedAt, responseBody.threadId);
    // A remplacer ! On retourne ici un messageModel vide seulement pour que Typescript ne lève pas d'erreur !
  }
}
