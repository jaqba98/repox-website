import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {HomeComponent} from "./core/component/home/home.component";
import {PageNotFoundComponent} from "./core/component/page-not-found/page-not-found.component";
import {GettingStartedComponent} from "./core/component/documentation/getting-started/getting-started.component";
import {InstallationComponent} from "./core/component/documentation/installation/installation.component";
import {GenerateComponent} from "./core/component/documentation/generate/generate.component";
import {GenerateWorkspaceComponent} from "./core/component/documentation/generate-workspace/generate-workspace.component";
import {DocumentationComponent} from "./core/component/documentation/documentation.component";
import {RegenerateComponent} from "./core/component/documentation/regenerate/regenerate.component";

export const routes: Routes = [
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {
    path: "documentation",
    component: DocumentationComponent,
    children: [
      {path: "", redirectTo: "getting-started", pathMatch: "full"},
      {path: "getting-started", component: GettingStartedComponent},
      {path: "installation", component: InstallationComponent},
      {path: "generate", component: GenerateComponent},
      {path: "generate/workspace", component: GenerateWorkspaceComponent},
      {path: "regenerate", component: RegenerateComponent},
    ]
  },
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
