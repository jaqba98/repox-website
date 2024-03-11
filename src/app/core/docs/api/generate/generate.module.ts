import {NgModule} from "@angular/core";
import {RouterOutlet} from "@angular/router";

import {SharedModule} from "@shared";

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
    RouterOutlet,
    SharedModule
  ]
})
export class GenerateModule {
}
