import {Routes} from "@angular/router";

import {GettingStartedHomeComponent} from "./getting-started-home/getting-started-home.component";
import {GettingStartedInstallationComponent} from "./getting-started-home/getting-started-installation.component";

export const GETTING_STARTED_ROUTING: Routes = [
  {path: "", component: GettingStartedHomeComponent},
  {path: "installation", component: GettingStartedInstallationComponent}
];
