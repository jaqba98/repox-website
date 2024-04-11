import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";

import {SharedModule} from "../../../../shared/shared.module";

import {BuildProjectComponent} from "./component/build-project.component";
import {BuildComponent} from "./component/build.component";

@NgModule({
  declarations: [
    BuildComponent,
    BuildProjectComponent
  ],
  imports: [
    RouterModule,
    SharedModule
  ]
})
export class BuildModule {}
