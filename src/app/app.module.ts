import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {AppComponent} from "./app.component";

import {MessageComponent, MessageListComponent} from "./messages";
import {MessageFormComponent} from "./message-form";
import {MessageService} from "../shared/services/message/message.service";
import {ThreadService} from "../shared/services/thread/thread.service";
import {ThreadListComponent} from "./threads/thread-list/thread-list.component";
import {ThreadComponent} from "./threads/thread/thread.component";
import {AIService} from "../shared/services/extern/ai/ai.service";
import {LoginComponent} from "./login/login.component";
import {LoginService} from "../shared/services/login/login.service";
import {EmojiPipe} from "../shared/pipes/emoji.pipe";
import {FrameComponent} from "./frame/frame.component";
import {TopBannerComponent} from "./top-banner/top-banner.component";
import {ImagePipe} from "../shared/pipes/image.pipe";
import {LinkPipe} from "../shared/pipes/link.pipe";
import {IframeHeightDirective} from "../shared/directives/iframe.directive";


@NgModule({
  declarations: [
    AppComponent,
    MessageFormComponent,
    MessageListComponent,
    ThreadComponent,
    ThreadListComponent,
    MessageComponent,
    LoginComponent,
    EmojiPipe,
    FrameComponent,
    TopBannerComponent,
    ImagePipe,
    LinkPipe,
    IframeHeightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MessageService, ThreadService, AIService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
