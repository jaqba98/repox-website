import {NgModule} from "@angular/core";

import {DumbModule} from "../dumb/dumb.module";

import {MessageService} from "primeng/api";

import {BreadcrumbSmartComponent} from "./component/breadcrumb-smart.component";
import {TerminalSmartComponent} from "./component/terminal-smart.component";
import {HeaderSmartComponent} from "./component/header-smart.component";
import {InfoMessageSmartComponent} from "./component/info-message-smart.component";
import {ParagraphSmartComponent} from "./component/paragraph-smart.component";
import {ArgumentsSmartComponent} from "./component/arguments-smart.component";
import {MainNavSmartComponent} from "./component/main-nav-smart.component";
import {ToastSmartComponent} from "./component/toast-smart.component";

@NgModule({
  declarations: [
    ArgumentsSmartComponent,
    BreadcrumbSmartComponent,
    HeaderSmartComponent,
    InfoMessageSmartComponent,
    ParagraphSmartComponent,
    TerminalSmartComponent,
    MainNavSmartComponent,
    ToastSmartComponent
  ],
  imports: [DumbModule],
  exports: [
    ArgumentsSmartComponent,
    BreadcrumbSmartComponent,
    HeaderSmartComponent,
    InfoMessageSmartComponent,
    ParagraphSmartComponent,
    TerminalSmartComponent,
    MainNavSmartComponent,
    ToastSmartComponent
  ],
  providers: [
    MessageService
  ]
})
export class SmartModule {
}
