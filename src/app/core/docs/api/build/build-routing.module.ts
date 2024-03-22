import {Routes} from "@angular/router";

import {BuildIntroductionComponent} from "./component/build-introduction.component";
import {BuildProjectComponent} from "./component/build-project.component";

export const BUILD_ROUTING: Routes = [
  {path: "", component: BuildIntroductionComponent},
  {path: "project", component: BuildProjectComponent}
];
