import { Component, Input, OnInit } from "@angular/core";
import {LoginService} from "../../shared/services/login/login.service";


@Component({
    selector: "app-login",
    templateUrl: "login.component.html",
    styleUrls: ["login.component.css"]
})
export class LoginComponent implements OnInit {

    public username: string;
    public defaultpseudo: "anonymous";

    constructor(private loginService: LoginService) {

    }

    ngOnInit() { this.username = this.defaultpseudo; }

    connectIfValid() {
      if (this.isValid()) {
        this.loginService.login(this.username);
      }
    }

    isConnected() {
      return this.loginService.isConnected();
    }

    isValid() {
      if (this.username === "") {
        return false;
      }
      for ( let i = 0; i < this.username.length; i++) {
        if (!(this.username.charCodeAt(i) > 96 && this.username.charCodeAt(i) < 123 )) {
          return false;
        }
      }
      return true;
    }
}
