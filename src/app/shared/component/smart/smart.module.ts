import {NgModule} from "@angular/core";

import {DumbModule} from "../dumb/dumb.module";
import {BreadcrumbSmartComponent} from "./component/breadcrumb-smart.component";
import {TerminalSmartComponent} from "./component/terminal-smart.component";
import {HeaderSmartComponent} from "./component/header-smart.component";
import {InfoMessageSmartComponent} from "./component/info-message-smart.component";
import {MessageService} from "primeng/api";

@NgModule({
  declarations: [
    BreadcrumbSmartComponent,
    TerminalSmartComponent,
    HeaderSmartComponent,
    InfoMessageSmartComponent
  ],
  imports: [DumbModule],
  exports: [
    BreadcrumbSmartComponent,
    TerminalSmartComponent,
    HeaderSmartComponent,
    InfoMessageSmartComponent
  ],
  providers: [
    MessageService
  ]
})
export class SmartModule {
}
