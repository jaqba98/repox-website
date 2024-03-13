import {NgModule} from "@angular/core";

import {BreadcrumbModule} from "primeng/breadcrumb";
import {PanelModule} from "primeng/panel";
import {ButtonModule} from "primeng/button";
import {ToastModule} from "primeng/toast";
import {MessageService} from "primeng/api";

import {BreadcrumbDumbComponent} from "./breadcrumb-dumb/breadcrumb-dumb.component";
import {TerminalDumbComponent} from "./terminal-dumb/terminal-dumb.component";

@NgModule({
  declarations: [
    BreadcrumbDumbComponent,
    TerminalDumbComponent
  ],
  imports: [
    BreadcrumbModule,
    PanelModule,
    ButtonModule,
    ToastModule
  ],
  exports: [
    BreadcrumbDumbComponent,
    TerminalDumbComponent
  ],
  providers: [
    MessageService
  ]
})
export class DumbModule {
}
