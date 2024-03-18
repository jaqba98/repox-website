import {NgModule} from "@angular/core";

import {DocsContentComponent} from "./docs-content/docs-content.component";
import {SmartModule} from "../smart/smart.module";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    DocsContentComponent
  ],
  imports: [
    CommonModule,
    SmartModule
  ],
  exports: [
    DocsContentComponent
  ]
})
export class FormModule {
}
