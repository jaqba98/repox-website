import {NgModule} from "@angular/core";

import {DumbModule} from "../dumb/dumb.module";
import {BreadcrumbSmartComponent} from "./component/breadcrumb-smart.component";
import {TerminalSmartComponent} from "./component/terminal-smart.component";
import {HeaderSmartComponent} from "./component/header-smart.component";

@NgModule({
  declarations: [
    BreadcrumbSmartComponent,
    TerminalSmartComponent,
    HeaderSmartComponent
  ],
  imports: [DumbModule],
  exports: [
    BreadcrumbSmartComponent,
    TerminalSmartComponent,
    HeaderSmartComponent
  ]
})
export class SmartModule {
}
