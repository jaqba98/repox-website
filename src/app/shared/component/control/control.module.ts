import {NgModule} from "@angular/core";

import {TerminalComponent} from "./terminal/terminal.component";
import {PanelModule} from "primeng/panel";
import {ToastModule} from "primeng/toast";
import {ParagraphComponent} from './paragraph/paragraph.component';
import { H2Component } from './h2/h2.component';

@NgModule({
  declarations: [
    TerminalComponent,
    ParagraphComponent,
    H2Component
  ],
  imports: [
    PanelModule,
    ToastModule
  ],
  exports: [
    TerminalComponent,
    ParagraphComponent,
    H2Component
  ]
})
export class ControlModule {
}
