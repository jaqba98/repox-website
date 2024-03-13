import {NgModule} from "@angular/core";

import {BreadcrumbModule} from "primeng/breadcrumb";
import {PanelModule} from "primeng/panel";

import {BreadcrumbDumbComponent} from "./breadcrumb-dumb/breadcrumb-dumb.component";
import {TerminalDumbComponent} from "./terminal-dumb/terminal-dumb.component";

@NgModule({
  declarations: [
    BreadcrumbDumbComponent,
    TerminalDumbComponent
  ],
  imports: [
    BreadcrumbModule,
    PanelModule
  ],
  exports: [
    BreadcrumbDumbComponent,
    TerminalDumbComponent
  ]
})
export class DumbModule {
}
