import {NgModule} from "@angular/core";

import {BreadcrumbModule} from "primeng/breadcrumb";

import {BreadcrumbDumbComponent} from "./breadcrumb-dumb/breadcrumb-dumb.component";

@NgModule({
  declarations: [
    BreadcrumbDumbComponent
  ],
  imports: [
    BreadcrumbModule
  ]
})
export class DumbModule {
}
