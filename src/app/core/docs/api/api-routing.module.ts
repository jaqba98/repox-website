import {Routes} from "@angular/router";

import {GenerateComponent} from "./generate/component/generate.component";
import {RegenerateComponent} from "./regenerate/regenerate.component";
import {ApiHomeComponent} from "./api-home/api-home.component";
import {GENERATE_ROUTING} from "./generate/generate-routing.module";

export const API_ROUTING: Routes = [
  {path: "", component: ApiHomeComponent},
  {path: "generate", component: GenerateComponent, children: GENERATE_ROUTING},
  {path: "regenerate", component: RegenerateComponent}
];
