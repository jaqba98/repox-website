import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";

import {SharedModule} from "../../../shared/shared.module";

import {GettingStartedHomeComponent} from "./getting-started-home/getting-started-home.component";
import {GettingStartedComponent} from "./getting-started.component";
import {GettingStartedInstallationComponent} from "./getting-started-home/getting-started-installation.component";
import {GettingStartedTryItComponent} from "./getting-started-home/getting-started-try-it.component";

@NgModule({
  declarations: [
    GettingStartedComponent,
    GettingStartedHomeComponent,
    GettingStartedInstallationComponent,
    GettingStartedTryItComponent
  ],
  imports: [
    RouterModule,
    SharedModule
  ]
})
export class GettingStartedModule {
}
