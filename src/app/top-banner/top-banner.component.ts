import { Component, Input, OnInit } from "@angular/core";
import {LoginService} from "../../shared/services/login/login.service";


@Component({
    selector: "app-topbanner",
    templateUrl: "top-banner.component.html",
    styleUrls: ["top-banner.component.css"]
})
export class TopBannerComponent implements OnInit {

    private username: string;

    constructor(private loginService : LoginService) {

    }

    ngOnInit() { }



}
