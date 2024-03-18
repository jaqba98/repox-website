import {Routes} from "@angular/router";

import {GenerateIntroductionComponent} from "./component/generate-introduction.component";
import {GenerateWorkspaceComponent} from "./component/generate-workspace.component";
import {GenerateProjectComponent} from "./component/generate-project.component";

export const GENERATE_ROUTING: Routes = [
  {path: "", component: GenerateIntroductionComponent},
  {path: "workspace", component: GenerateWorkspaceComponent},
  {path: "project", component: GenerateProjectComponent}
];
