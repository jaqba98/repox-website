import {NgModule} from "@angular/core";

import {BreadcrumbDumbComponent} from "./breadcrumb-dumb/breadcrumb-dumb.component";

import {BreadcrumbModule} from "primeng/breadcrumb";

@NgModule({
  declarations: [
    BreadcrumbDumbComponent
  ],
  imports: [
    BreadcrumbModule
  ],
  exports: [
    BreadcrumbDumbComponent
  ]
})
export class DumbModule {
}
