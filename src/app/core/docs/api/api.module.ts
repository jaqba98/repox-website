import {NgModule} from "@angular/core";
import {RouterLink, RouterOutlet} from "@angular/router";

import {SharedModule} from "../../../shared/shared.module";
import {GenerateModule} from "./generate/generate.module";

import {ApiComponent} from './api.component';
import {ApiHomeComponent} from './api-home/api-home.component';
import {RegenerateModule} from "./regenerate/regenerate.module";

@NgModule({
  declarations: [
    ApiComponent,
    ApiHomeComponent,
  ],
  imports: [
    SharedModule,
    RouterOutlet,
    RouterLink,
    GenerateModule,
    RegenerateModule
  ],
  exports: [
    ApiComponent,
    ApiHomeComponent
  ]
})
export class ApiModule {
}
