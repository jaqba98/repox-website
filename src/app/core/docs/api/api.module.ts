import {NgModule} from "@angular/core";
import {RouterLink, RouterOutlet} from "@angular/router";

import {SharedModule} from "../../../shared/shared.module";

import {ApiComponent} from './api.component';
import {ApiHomeComponent} from './api-home/api-home.component';
import {GenerateComponent} from './generate/generate.component';
import {RegenerateComponent} from './regenerate/regenerate.component';
import {WorkspaceComponent} from './generate/workspace/workspace.component';
import {GenerateHomeComponent} from "./generate/generate-home/generate-home.component";

@NgModule({
  declarations: [
    ApiComponent,
    GenerateComponent,
    RegenerateComponent,
    ApiHomeComponent,
    WorkspaceComponent,
    GenerateHomeComponent
  ],
  imports: [
    SharedModule,
    RouterOutlet,
    RouterLink
  ],
  exports: [
    ApiComponent,
    GenerateComponent,
    RegenerateComponent,
    ApiHomeComponent
  ]
})
export class ApiModule {
}
