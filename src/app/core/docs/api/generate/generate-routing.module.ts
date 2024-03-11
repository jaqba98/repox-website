import {Routes} from "@angular/router";

import {GenerateIntroductionComponent} from "./generate-introduction/generate-introduction.component";
import {WorkspaceComponent} from "./workspace/workspace.component";

export const GENERATE_ROUTING: Routes = [
  {path: "", component: GenerateIntroductionComponent},
  {path: "workspace", component: WorkspaceComponent}
];
