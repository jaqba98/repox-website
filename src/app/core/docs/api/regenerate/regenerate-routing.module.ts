import {Routes} from "@angular/router";

import {RegenerateIntroductionComponent} from "./component/regenerate-introduction.component";
import {RegenerateWorkspaceComponent} from "./component/regenerate-workspace.component";

export const REGENERATE_ROUTING: Routes = [
  {path: "", component: RegenerateIntroductionComponent},
  {path: "workspace", component: RegenerateWorkspaceComponent}
];
