import {Routes} from "@angular/router";

import {GenerateComponent} from "./generate/component/generate.component";
import {RegenerateComponent} from "./regenerate/component/regenerate.component";
import {ApiHomeComponent} from "./api-home/api-home.component";
import {GENERATE_ROUTING} from "./generate/generate-routing.module";
import {REGENERATE_ROUTING} from "./regenerate/regenerate-routing.module";
import {BUILD_ROUTING} from "./build/build-routing.module";

export const API_ROUTING: Routes = [
  {path: "", component: ApiHomeComponent},
  {path: "generate", component: GenerateComponent, children: GENERATE_ROUTING},
  {path: "regenerate", component: RegenerateComponent, children: REGENERATE_ROUTING},
  {path: "build", component: RegenerateComponent, children: BUILD_ROUTING}
];
