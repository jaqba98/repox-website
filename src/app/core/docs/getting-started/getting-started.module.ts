import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";

import {SharedModule} from "../../../shared/shared.module";

import {GettingStartedHomeComponent} from "./getting-started-home/getting-started-home.component";
import {GettingStartedComponent} from "./getting-started.component";
import {GettingStartedInstallationComponent} from "./getting-started-home/getting-started-installation.component";

@NgModule({
  declarations: [
    GettingStartedComponent,
    GettingStartedHomeComponent,
    GettingStartedInstallationComponent
  ],
  imports: [
    RouterModule,
    SharedModule
  ]
})
export class GettingStartedModule {
}
