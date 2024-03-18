import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";

import {SharedModule} from "../../../../shared/shared.module";

import {RegenerateComponent} from "./component/regenerate.component";
import {RegenerateIntroductionComponent} from "./component/regenerate-introduction.component";
import {RegenerateWorkspaceComponent} from "./component/regenerate-workspace.component";

@NgModule({
  declarations: [
    RegenerateComponent,
    RegenerateIntroductionComponent,
    RegenerateWorkspaceComponent
  ],
  imports: [
    RouterModule,
    SharedModule
  ]
})
export class RegenerateModule {
}
