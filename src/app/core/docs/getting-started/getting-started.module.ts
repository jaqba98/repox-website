import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";

import {SharedModule} from "../../../shared/shared.module";

import {GettingStartedHomeComponent} from "./getting-started-home/getting-started-home.component";
import {GettingStartedComponent} from "./getting-started.component";

@NgModule({
  declarations: [
    GettingStartedComponent,
    GettingStartedHomeComponent
  ],
  imports: [
    RouterModule,
    SharedModule
  ]
})
export class GettingStartedModule {
}
