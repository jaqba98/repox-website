import {NgModule} from "@angular/core";
import {RouterOutlet} from "@angular/router";

import {SharedModule} from "@shared";

import {GenerateComponent} from "./generate.component";
import {GenerateIntroductionComponent} from "./generate-introduction/generate-introduction.component";
import {GenerateWorkspaceComponent} from "./generate-workspace/generate-workspace.component";

@NgModule({
  declarations: [
    GenerateComponent,
    GenerateIntroductionComponent,
    GenerateWorkspaceComponent
  ],
  imports: [
    SharedModule,
    RouterOutlet
  ]
})
export class GenerateModule {
}
