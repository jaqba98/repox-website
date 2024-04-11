import {Routes} from "@angular/router";

import {LintProjectComponent} from "./component/lint-project.component";

export const LINT_ROUTING: Routes = [
  {path: "", redirectTo: 'project', pathMatch: 'full'},
  {path: "project", component: LintProjectComponent}
];
