import {Routes} from "@angular/router";

import {RegenerateWorkspaceComponent} from "./component/regenerate-workspace.component";

export const REGENERATE_ROUTING: Routes = [
  {path: "", redirectTo: "workspace", pathMatch: "full"},
  {path: "workspace", component: RegenerateWorkspaceComponent}
];
