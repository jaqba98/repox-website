import {NgModule} from "@angular/core";

import {PanelModule} from "primeng/panel";
import {ToastModule} from "primeng/toast";
import {ArgumentsComponent} from './arguments/arguments.component';
import {TableModule} from "primeng/table";

@NgModule({
  declarations: [
    ArgumentsComponent
  ],
  imports: [
    PanelModule,
    ToastModule,
    TableModule
  ],
  exports: [
    ArgumentsComponent
  ]
})
export class ControlModule {
}
