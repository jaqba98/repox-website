import {NgModule} from "@angular/core";

import {DumbModule} from "../dumb/dumb.module";
import {BreadcrumbSmartComponent} from "./component/breadcrumb-smart.component";
import {TerminalSmartComponent} from "./component/terminal-smart.component";

@NgModule({
  declarations: [
    BreadcrumbSmartComponent,
    TerminalSmartComponent
  ],
  imports: [DumbModule],
  exports: [
    BreadcrumbSmartComponent,
    TerminalSmartComponent
  ]
})
export class SmartModule {
}
