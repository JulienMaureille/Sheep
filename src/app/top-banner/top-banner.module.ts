import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import {TopBannerComponent} from "./top-banner.component";

@NgModule({
    declarations: [
      TopBannerComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [TopBannerComponent],
    providers: []
})
export class TopBannerModule { }
