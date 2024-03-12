import {NgModule} from "@angular/core";

import {BreadcrumbSmartComponent} from "./breadcrumb-smart/breadcrumb-smart.component";
import {DumbModule} from "../dumb/dumb.module";

@NgModule({
  declarations: [BreadcrumbSmartComponent],
  imports: [DumbModule],
  exports: [BreadcrumbSmartComponent]
})
export class SmartModule {
}
