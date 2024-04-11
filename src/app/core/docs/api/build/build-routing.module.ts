import {Routes} from "@angular/router";

import {BuildProjectComponent} from "./component/build-project.component";

export const BUILD_ROUTING: Routes = [
  {path: "", redirectTo: 'project', pathMatch: 'full'},
  {path: "project", component: BuildProjectComponent}
];
