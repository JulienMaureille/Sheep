/**
 * Created by Julien on 13/06/2017.
 */
import {Injectable} from "@angular/core";

import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Injectable()
export class LoginService {

  private user: string;
  private is_connected = false;

  constructor() {
    this.user = "anonymous";
  }

  public login(name: string) {
    this.user = name;
    this.is_connected = true;
  }

  public logoff() {
    this.user = "anonymous";
    this.is_connected = false;
  }

  public getUser() {
    return this.user;
  }

  public isConnected() {
    return this.is_connected;
  }


}
