import {NgModule} from "@angular/core";
import {HomeComponent} from "./component/home/home.component";
import {SharedModule} from "../shared/shared.module";
import {PageNotFoundComponent} from "./component/page-not-found/page-not-found.component";
import {RouterOutlet} from "@angular/router";
import {DocumentationComponent} from "./component/documentation/documentation.component";
import {GettingStartedComponent} from "./component/documentation/getting-started/getting-started.component";
import {InstallationComponent} from "./component/documentation/installation/installation.component";

@NgModule({
  declarations: [
    HomeComponent,
    DocumentationComponent,
    GettingStartedComponent,
    InstallationComponent,
    PageNotFoundComponent
  ],
  imports: [
    SharedModule,
    RouterOutlet
  ],
  exports: [
    HomeComponent,
    DocumentationComponent,
    GettingStartedComponent,
    InstallationComponent,
    PageNotFoundComponent
  ]
})
export class CoreModule {
}
