import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {HomeComponent} from "./core/home/home.component";
import {DocsComponent} from "./core/docs/docs.component";
import {BlogComponent} from "./core/blog/blog.component";
import {CommunityComponent} from "./core/community/community.component";
import {
  PluginsRegistryComponent
} from "./core/plugins-registry/plugins-registry.component";
import {SponsorsComponent} from "./core/sponsors/sponsors.component";
import {
  GettingStartedComponent
} from "./core/docs/getting-started/getting-started.component";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "docs",
    component: DocsComponent
  },
  {
    path: "blog",
    component: BlogComponent
  },
  {
    path: "community",
    component: CommunityComponent
  },
  {
    path: "plugins-registry",
    component: PluginsRegistryComponent
  },
  {
    path: "sponsors",
    component: SponsorsComponent
  },
  {
    path: "getting-started",
    component: GettingStartedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
