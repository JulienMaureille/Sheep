/**
 * Created by Julien on 12/06/2017.
 */

import { Injectable } from "@angular/core";
import { Http, RequestOptions, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";

import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { ThreadModel } from "../../models/ThreadModel";
import { ReplaySubject } from "rxjs/ReplaySubject";
import { URLSERVER } from "shared/constants/urls";

@Injectable()
export class ThreadService {

    private url: string;

    public threadList$: ReplaySubject<ThreadModel[]>;

    constructor(private http: Http) {
        this.url = URLSERVER;
        this.threadList$ = new ReplaySubject(1);
        this.threadList$.next([new ThreadModel()]);
    }

    /**
     * Fonction getThreads : pour recuperer la liste des threads
     * @returns {Observable<R>}
     */
    public getThreads() {
        const finalUrl = this.url;
        this.http.get(finalUrl)
            .subscribe((response) => this.extractAndUpdateMessageList(response));
    }

    /**
     * Fonction addThread : pour ajouter un nouveau thread
     */
    public addThread(thread: ThreadModel) {
        // TODO
    }

    /**
     * Fonction extractAndUpdateThreadList.
     * Cette fonction permet d'extraire la liste des threads de la 'response' reçue et ensuite de mettre à jour la liste
     * des threads dans l'observable threadList$.
     * @param response
     */
    extractAndUpdateMessageList(response: Response) {
        const threadList = response.json() || [];
        this.threadList$.next(threadList);
    }
}
