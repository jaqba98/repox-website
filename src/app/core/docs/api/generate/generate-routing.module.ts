import {Routes} from "@angular/router";

import {GenerateHomeComponent} from "./generate-home/generate-home.component";
import {WorkspaceComponent} from "./workspace/workspace.component";

export const GENERATE_ROUTING: Routes = [
  {path: "", component: GenerateHomeComponent},
  {path: "workspace", component: WorkspaceComponent}
];
