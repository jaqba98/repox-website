import {NgModule} from "@angular/core";
import {BreadcrumbModule} from "primeng/breadcrumb";

import {BreadcrumbDumbComponent} from "./breadcrumb-dumb/breadcrumb-dumb.component";
import {TerminalDumbComponent} from './terminal-dumb/terminal-dumb.component';

@NgModule({
  declarations: [
    BreadcrumbDumbComponent,
    TerminalDumbComponent
  ],
  imports: [
    BreadcrumbModule
  ],
  exports: [
    BreadcrumbDumbComponent,
    TerminalDumbComponent
  ]
})
export class DumbModule {
}
