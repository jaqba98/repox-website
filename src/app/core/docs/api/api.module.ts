import {NgModule} from "@angular/core";
import {RouterLink, RouterOutlet} from "@angular/router";

import {SharedModule} from "../../../shared/shared.module";
import {GenerateModule} from "./generate/generate.module";

import {ApiComponent} from './api.component';
import {ApiHomeComponent} from './api-home/api-home.component';
import {RegenerateComponent} from './regenerate/regenerate.component';

@NgModule({
  declarations: [
    ApiComponent,
    RegenerateComponent,
    ApiHomeComponent,
  ],
  imports: [
    SharedModule,
    RouterOutlet,
    RouterLink,
    GenerateModule
  ],
  exports: [
    ApiComponent,
    RegenerateComponent,
    ApiHomeComponent
  ]
})
export class ApiModule {
}
