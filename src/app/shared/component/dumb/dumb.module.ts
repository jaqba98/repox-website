import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {BreadcrumbModule} from "primeng/breadcrumb";
import {PanelModule} from "primeng/panel";
import {ButtonModule} from "primeng/button";
import {ToastModule} from "primeng/toast";
import {MessageService} from "primeng/api";

import {BreadcrumbDumbComponent} from "./breadcrumb-dumb/breadcrumb-dumb.component";
import {TerminalDumbComponent} from "./terminal-dumb/terminal-dumb.component";
import {HeaderDumbComponent} from "./header-dumb/header-dumb.component";

@NgModule({
  declarations: [
    BreadcrumbDumbComponent,
    TerminalDumbComponent,
    HeaderDumbComponent
  ],
  imports: [
    CommonModule,
    BreadcrumbModule,
    PanelModule,
    ButtonModule,
    ToastModule
  ],
  exports: [
    BreadcrumbDumbComponent,
    TerminalDumbComponent,
    HeaderDumbComponent
  ],
  providers: [
    MessageService
  ]
})
export class DumbModule {
}
