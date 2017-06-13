import {Component} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {LoginService} from "../shared/services/login/login.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {

  public title: string;

  constructor(private loginService:LoginService) {
    this.title = "Chat";
    Observable.create();
  }

  logoff(){
    this.loginService.logoff();
  }

  isConnected(){
    return this.loginService.isConnected();
  }

}
