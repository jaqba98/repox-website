import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";

import {SharedModule} from "../../../../shared/shared.module";

import {BuildIntroductionComponent} from "./component/build-introduction.component";
import {BuildProjectComponent} from "./component/build-project.component";
import {BuildComponent} from "./component/build.component";

@NgModule({
  declarations: [
    BuildComponent,
    BuildIntroductionComponent,
    BuildProjectComponent
  ],
  imports: [
    RouterModule,
    SharedModule
  ]
})
export class BuildModule {
}
