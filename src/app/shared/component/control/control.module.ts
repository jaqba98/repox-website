import {NgModule} from "@angular/core";

import {PanelModule} from "primeng/panel";
import {ToastModule} from "primeng/toast";
import {ParagraphComponent} from './paragraph/paragraph.component';
import { ArgumentsComponent } from './arguments/arguments.component';
import {TableModule} from "primeng/table";

@NgModule({
  declarations: [
    ParagraphComponent,
    ArgumentsComponent
  ],
  imports: [
    PanelModule,
    ToastModule,
    TableModule
  ],
  exports: [
    ParagraphComponent,
    ArgumentsComponent
  ]
})
export class ControlModule {
}
