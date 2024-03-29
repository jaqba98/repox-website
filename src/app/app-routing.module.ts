import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {HomeComponent} from "./core/home/home.component";
import {DocsComponent} from "./core/docs/docs.component";
import {BlogComponent} from "./core/blog/blog.component";
import {CommunityComponent} from "./core/community/community.component";
import {PluginsRegistryComponent} from "./core/plugins-registry/plugins-registry.component";
import {SponsorsComponent} from "./core/sponsors/sponsors.component";
import {DOCS_ROUTING} from "./core/docs/docs-routing.module";

export const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "docs", component: DocsComponent, children: DOCS_ROUTING},
  {path: "blog", component: BlogComponent},
  {path: "community", component: CommunityComponent},
  {path: "plugins-registry", component: PluginsRegistryComponent},
  {path: "sponsors", component: SponsorsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
