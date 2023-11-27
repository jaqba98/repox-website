import {NgModule} from "@angular/core";
import {HomeComponent} from "./component/home/home.component";
import {SharedModule} from "../shared/shared.module";
import {PageNotFoundComponent} from "./component/page-not-found/page-not-found.component";
import {RouterOutlet} from "@angular/router";
import {DocumentationComponent} from "./component/documentation/documentation.component";
import {GettingStartedComponent} from "./component/documentation/getting-started/getting-started.component";
import {InstallationComponent} from "./component/documentation/installation/installation.component";
import {RegenerateComponent} from "./component/documentation/regenerate/regenerate.component";
import {GenerateProjectComponent} from "./component/documentation/generate-workspace/generate-project.component";
import {
  RegenerateWorkspaceComponent
} from "./component/documentation/regenerate-workspace/regenerate-workspace.component";
import {GenerateWorkspaceComponent} from "./component/documentation/generate-project/generate-workspace.component";
import {BuildComponent} from "./component/documentation/build/build.component";
import {BuildProjectComponent} from "./component/documentation/build-project/build-project.component";

@NgModule({
  declarations: [
    HomeComponent,
    DocumentationComponent,
    GettingStartedComponent,
    InstallationComponent,
    PageNotFoundComponent,
    GenerateProjectComponent,
    RegenerateComponent,
    RegenerateWorkspaceComponent,
    GenerateWorkspaceComponent,
    BuildComponent,
    BuildProjectComponent
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
    GenerateProjectComponent,
    RegenerateComponent,
    RegenerateWorkspaceComponent,
    GenerateWorkspaceComponent,
    BuildComponent,
    BuildProjectComponent
  ]
})
export class CoreModule {
}
