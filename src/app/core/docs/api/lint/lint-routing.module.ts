import {Routes} from "@angular/router";

import {LintProjectComponent} from "./component/lint-project.component";
import {LintWorkspaceComponent} from "./component/lint-workspace.component";

export const LINT_ROUTING: Routes = [
  {path: "", redirectTo: 'project', pathMatch: 'full'},
  {path: "project", component: LintProjectComponent},
  {path: "workspace", component: LintWorkspaceComponent}
];
