import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";

import {SharedModule} from "../../../../shared/shared.module";
import {LintComponent} from "./lint.component";

@NgModule({
  declarations: [
    LintComponent
  ],
  imports: [
    RouterModule,
    SharedModule
  ]
})
export class LintModule {
}
