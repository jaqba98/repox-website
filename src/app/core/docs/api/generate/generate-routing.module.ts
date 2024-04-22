import {Routes} from "@angular/router";

import {GenerateWorkspaceComponent} from "./component/generate-workspace.component";
import {GenerateProjectComponent} from "./component/generate-project.component";

export const GENERATE_ROUTING: Routes = [
  {path: "", redirectTo: "workspace", pathMatch: "full"},
  {path: "workspace", component: GenerateWorkspaceComponent},
  {path: "project", component: GenerateProjectComponent}
];
