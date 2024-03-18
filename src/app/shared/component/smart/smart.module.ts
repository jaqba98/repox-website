import {NgModule} from "@angular/core";

import {DumbModule} from "../dumb/dumb.module";

import {BreadcrumbSmartComponent} from "./component/breadcrumb-smart.component";
import {TerminalSmartComponent} from "./component/terminal-smart.component";
import {HeaderSmartComponent} from "./component/header-smart.component";
import {InfoMessageSmartComponent} from "./component/info-message-smart.component";
import {ParagraphSmartComponent} from "./component/paragraph-smart.component";
import {ArgumentsSmartComponent} from "./component/arguments-smart.component";

import {MessageService} from "primeng/api";

@NgModule({
  declarations: [
    ArgumentsSmartComponent,
    BreadcrumbSmartComponent,
    HeaderSmartComponent,
    InfoMessageSmartComponent,
    ParagraphSmartComponent,
    TerminalSmartComponent
  ],
  imports: [DumbModule],
  exports: [
    ArgumentsSmartComponent,
    BreadcrumbSmartComponent,
    HeaderSmartComponent,
    InfoMessageSmartComponent,
    ParagraphSmartComponent,
    TerminalSmartComponent
  ],
  providers: [
    MessageService
  ]
})
export class SmartModule {
}
