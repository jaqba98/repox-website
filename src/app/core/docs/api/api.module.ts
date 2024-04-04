import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";

import {SharedModule} from "../../../shared/shared.module";

import {ApiComponent} from './api.component';
import {ApiHomeComponent} from './api-home/api-home.component';
import {GenerateModule} from "./generate/generate.module";
import {RegenerateModule} from "./regenerate/regenerate.module";
import {BuildModule} from "./build/build.module";
import {LintModule} from "./lint/lint.module";

@NgModule({
  declarations: [
    ApiComponent,
    ApiHomeComponent
  ],
  imports: [
    RouterModule,
    SharedModule,
    GenerateModule,
    RegenerateModule,
    BuildModule,
    LintModule
  ]
})
export class ApiModule {
}
