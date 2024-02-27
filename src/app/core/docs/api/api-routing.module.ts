import {Routes} from "@angular/router";

import {GenerateComponent} from "./generate/generate.component";
import {RegenerateComponent} from "./regenerate/regenerate.component";

export const API_ROUTING: Routes = [
  {path: "", redirectTo: "generate", pathMatch: "full"},
  {path: "generate", component: GenerateComponent},
  {path: "regenerate", component: RegenerateComponent}
];
