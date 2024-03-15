import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {BreadcrumbModule} from "primeng/breadcrumb";
import {PanelModule} from "primeng/panel";
import {ButtonModule} from "primeng/button";
import {ToastModule} from "primeng/toast";
import {MessagesModule} from "primeng/messages";

import {BreadcrumbDumbComponent} from "./breadcrumb-dumb/breadcrumb-dumb.component";
import {TerminalDumbComponent} from "./terminal-dumb/terminal-dumb.component";
import {HeaderDumbComponent} from "./header-dumb/header-dumb.component";
import {InfoMessageDumbComponent} from "./info-message-dumb/info-message-dumb.component";
import { ParagraphDumbComponent } from './paragraph-dumb/paragraph-dumb.component';

@NgModule({
  declarations: [
    BreadcrumbDumbComponent,
    TerminalDumbComponent,
    HeaderDumbComponent,
    InfoMessageDumbComponent,
    ParagraphDumbComponent
  ],
  imports: [
    CommonModule,
    BreadcrumbModule,
    PanelModule,
    ButtonModule,
    ToastModule,
    MessagesModule
  ],
  exports: [
    BreadcrumbDumbComponent,
    TerminalDumbComponent,
    HeaderDumbComponent,
    InfoMessageDumbComponent
  ]
})
export class DumbModule {
}
