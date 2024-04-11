import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";

import {SharedModule} from "@shared";

import {BuildComponent} from "./component/build.component";
import {BuildProjectComponent} from "./component/build-project.component";

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
