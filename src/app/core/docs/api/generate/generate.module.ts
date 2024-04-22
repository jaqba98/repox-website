import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";

import {SharedModule} from "../../../../shared/shared.module";

import {GenerateComponent} from "./component/generate.component";
import {GenerateWorkspaceComponent} from "./component/generate-workspace.component";
import {GenerateProjectComponent} from "./component/generate-project.component";

@NgModule({
  declarations: [
    GenerateComponent,
    GenerateWorkspaceComponent,
    GenerateProjectComponent
  ],
  imports: [
    RouterModule,
    SharedModule
  ]
})
export class GenerateModule {
}
