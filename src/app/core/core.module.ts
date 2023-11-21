import {NgModule} from "@angular/core";
import {HomeComponent} from "./component/home/home.component";
import {SharedModule} from "../shared/shared.module";
import {PageNotFoundComponent} from "./component/page-not-found/page-not-found.component";
import {RouterOutlet} from "@angular/router";
import {DocumentationComponent} from "./component/documentation/documentation.component";
import {GettingStartedComponent} from "./component/documentation/getting-started/getting-started.component";
import {InstallationComponent} from "./component/documentation/installation/installation.component";
import {RegenerateComponent} from "./component/documentation/regenerate/regenerate.component";
import {GenerateWorkspaceComponent} from "./component/documentation/generate-workspace/generate-workspace.component";
import {
  RegenerateWorkspaceComponent
} from "./component/documentation/regenerate-workspace/regenerate-workspace.component";

@NgModule({
  declarations: [
    HomeComponent,
    DocumentationComponent,
    GettingStartedComponent,
    InstallationComponent,
    PageNotFoundComponent,
    GenerateWorkspaceComponent,
    RegenerateComponent,
    RegenerateWorkspaceComponent
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
    PageNotFoundComponent,
    GenerateWorkspaceComponent,
    RegenerateComponent,
    RegenerateWorkspaceComponent
  ]
})
export class CoreModule {
}
