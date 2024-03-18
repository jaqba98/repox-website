import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {SmartModule} from "../smart/smart.module";

import {DocsContentFormComponent} from "./docs-content-form/docs-content-form.component";

@NgModule({
  declarations: [
    DocsContentFormComponent
  ],
  imports: [
    CommonModule,
    SmartModule
  ],
  exports: [
    DocsContentFormComponent
  ]
})
export class FormModule {
}
