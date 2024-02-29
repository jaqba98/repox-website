import {Routes} from "@angular/router";

import {GenerateComponent} from "./generate/generate.component";
import {RegenerateComponent} from "./regenerate/regenerate.component";
import {ApiHomeComponent} from "./api-home/api-home.component";

export const API_ROUTING: Routes = [
  {path: "", component: ApiHomeComponent},
  {path: "generate", component: GenerateComponent},
  {path: "regenerate", component: RegenerateComponent}
];
