import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";

import {SharedModule} from "../../../../shared/shared.module";

import {GenerateComponent} from "./component/generate.component";
import {GenerateIntroductionComponent} from "./component/generate-introduction.component";
import {GenerateWorkspaceComponent} from "./component/generate-workspace.component";

@NgModule({
  declarations: [
    GenerateComponent,
    GenerateIntroductionComponent,
    GenerateWorkspaceComponent
  ],
  imports: [
    RouterModule,
    SharedModule
  ]
})
export class GenerateModule {
}
