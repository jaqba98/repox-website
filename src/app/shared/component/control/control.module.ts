import {NgModule} from "@angular/core";

import {TerminalComponent} from "./terminal/terminal.component";
import {PanelModule} from "primeng/panel";

@NgModule({
  declarations: [
    TerminalComponent
  ],
  imports: [
    PanelModule
  ],
  exports: [
    TerminalComponent
  ]
})
export class ControlModule {
}
