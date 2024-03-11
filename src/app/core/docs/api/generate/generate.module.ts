import {NgModule} from "@angular/core";

import {GenerateIntroductionComponent} from "./generate-introduction/generate-introduction.component";
import {WorkspaceComponent} from "./workspace/workspace.component";
import {SharedModule} from "../../../../shared/shared.module";

@NgModule({
  declarations: [
    GenerateIntroductionComponent,
    WorkspaceComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    GenerateIntroductionComponent,
    WorkspaceComponent
  ]
})
export class GenerateModule {
}
