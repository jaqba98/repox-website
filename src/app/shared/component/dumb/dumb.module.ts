import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {ArgumentsDumbComponent} from './arguments-dumb/arguments-dumb.component';
import {BreadcrumbDumbComponent} from "./breadcrumb-dumb/breadcrumb-dumb.component";
import {TerminalDumbComponent} from "./terminal-dumb/terminal-dumb.component";
import {HeaderDumbComponent} from "./header-dumb/header-dumb.component";
import {InfoMessageDumbComponent} from "./info-message-dumb/info-message-dumb.component";
import {ParagraphDumbComponent} from './paragraph-dumb/paragraph-dumb.component';

import {TableModule} from "primeng/table";
import {BreadcrumbModule} from "primeng/breadcrumb";
import {MessagesModule} from "primeng/messages";
import {ToastModule} from "primeng/toast";
import {PanelModule} from "primeng/panel";
import {ButtonModule} from "primeng/button";

import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [
    ArgumentsDumbComponent,
    BreadcrumbDumbComponent,
    HeaderDumbComponent,
    InfoMessageDumbComponent,
    ParagraphDumbComponent,
    TerminalDumbComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    TableModule,
    BreadcrumbModule,
    MessagesModule,
    ToastModule,
    PanelModule,
    ButtonModule,
    FontAwesomeModule
  ],
  exports: [
    ArgumentsDumbComponent,
    BreadcrumbDumbComponent,
    HeaderDumbComponent,
    InfoMessageDumbComponent,
    ParagraphDumbComponent,
    TerminalDumbComponent
  ]
})
export class DumbModule {
}
