import {NgModule} from "@angular/core";

import {TerminalComponent} from "./terminal/terminal.component";
import {PanelModule} from "primeng/panel";
import {ToastModule} from "primeng/toast";

@NgModule({
  declarations: [
    TerminalComponent
  ],
    imports: [
        PanelModule,
        ToastModule
    ],
  exports: [
    TerminalComponent
  ]
})
export class ControlModule {
}
