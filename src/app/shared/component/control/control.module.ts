import {NgModule} from "@angular/core";

import {TerminalComponent} from "./terminal/terminal.component";
import {PanelModule} from "primeng/panel";
import {ToastModule} from "primeng/toast";
import {ParagraphComponent} from './paragraph/paragraph.component';

@NgModule({
  declarations: [
    TerminalComponent,
    ParagraphComponent
  ],
  imports: [
    PanelModule,
    ToastModule
  ],
  exports: [
    TerminalComponent,
    ParagraphComponent
  ]
})
export class ControlModule {
}
