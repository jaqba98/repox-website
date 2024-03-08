import {NgModule} from "@angular/core";

import {TerminalComponent} from "./terminal/terminal.component";
import {PanelModule} from "primeng/panel";
import {ToastModule} from "primeng/toast";
import {ParagraphComponent} from './paragraph/paragraph.component';
import { H2Component } from './h2/h2.component';
import { ArgumentsComponent } from './arguments/arguments.component';
import {TableModule} from "primeng/table";

@NgModule({
  declarations: [
    TerminalComponent,
    ParagraphComponent,
    H2Component,
    ArgumentsComponent
  ],
  imports: [
    PanelModule,
    ToastModule,
    TableModule
  ],
  exports: [
    TerminalComponent,
    ParagraphComponent,
    H2Component,
    ArgumentsComponent
  ]
})
export class ControlModule {
}
