import {NgModule} from "@angular/core";
import {RouterOutlet} from "@angular/router";

import {SharedModule} from "@shared";

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
    RouterOutlet,
    SharedModule
  ]
})
export class RegenerateModule {
}
