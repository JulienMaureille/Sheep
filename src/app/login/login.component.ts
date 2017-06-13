import { Component, Input, OnInit } from "@angular/core";
import {LoginService} from "../../shared/services/login/login.service";


@Component({
    selector: "app-login",
    templateUrl: "login.component.html",
    styleUrls: ["login.component.css"]
})
export class LoginComponent implements OnInit {

    public username: string;

    constructor(private loginService : LoginService) {

    }

    ngOnInit() { this.username = "anonymous"}

    connect(){
      this.loginService.login(this.username);
    }

    isConnected(){
      return this.loginService.isConnected();
    }

}
