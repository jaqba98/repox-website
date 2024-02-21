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
import {FeaturesComponent} from "./core/docs/features/features.component";
import {ConceptsComponent} from "./core/docs/concepts/concepts.component";
import {ExtensionComponent} from "./core/docs/extension/extension.component";
import {PluginsComponent} from "./core/docs/plugins/plugins.component";
import {ApiComponent} from "./core/docs/api/api.component";
import {ChangelogComponent} from "./core/docs/changelog/changelog.component";

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
  },
  {
    path: "features",
    component: FeaturesComponent
  },
  {
    path: "concepts",
    component: ConceptsComponent
  },
  {
    path: "extension",
    component: ExtensionComponent
  },
  {
    path: "plugins",
    component: PluginsComponent
  },
  {
    path: "api",
    component: ApiComponent
  },
  {
    path: "changelog",
    component: ChangelogComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
