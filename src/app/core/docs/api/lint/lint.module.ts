import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";

import {SharedModule} from "@shared";

import {LintComponent} from "./component/lint.component";
import {LintProjectComponent} from "./component/lint-project.component";
import {LintWorkspaceComponent} from "./component/lint-workspace.component";

@NgModule({
  declarations: [
    LintComponent,
    LintProjectComponent,
    LintWorkspaceComponent
  ],
  imports: [
    RouterModule,
    SharedModule
  ]
})
export class LintModule {}
