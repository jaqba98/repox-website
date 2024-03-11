import {NgModule} from "@angular/core";

import {GenerateIntroductionComponent} from "./generate-introduction/generate-introduction.component";
import {SharedModule} from "../../../../shared/shared.module";
import {GenerateWorkspaceComponent} from "./generate-workspace/generate-workspace.component";

@NgModule({
  declarations: [
    GenerateIntroductionComponent,
    GenerateWorkspaceComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    GenerateIntroductionComponent,
    GenerateWorkspaceComponent
  ]
})
export class GenerateModule {
}
