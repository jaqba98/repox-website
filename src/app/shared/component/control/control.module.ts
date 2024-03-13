import {NgModule} from "@angular/core";

import {PanelModule} from "primeng/panel";
import {ToastModule} from "primeng/toast";
import {ParagraphComponent} from './paragraph/paragraph.component';
import { H2Component } from './h2/h2.component';
import { ArgumentsComponent } from './arguments/arguments.component';
import {TableModule} from "primeng/table";
import { H1Component } from './h1/h1.component';

@NgModule({
  declarations: [
    ParagraphComponent,
    H2Component,
    ArgumentsComponent,
    H1Component
  ],
  imports: [
    PanelModule,
    ToastModule,
    TableModule
  ],
  exports: [
    ParagraphComponent,
    H2Component,
    ArgumentsComponent,
    H1Component
  ]
})
export class ControlModule {
}
