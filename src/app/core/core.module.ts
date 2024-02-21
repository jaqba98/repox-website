import {NgModule} from "@angular/core";
import {RouterOutlet} from "@angular/router";

import {SharedModule} from "../shared/shared.module";
import {HomeComponent} from "./home/home.component";
import {DocsComponent} from "./docs/docs.component";
import {BlogComponent} from "./blog/blog.component";
import {CommunityComponent} from "./community/community.component";
import {PluginsRegistryComponent} from "./plugins-registry/plugins-registry.component";
import {SponsorsComponent} from "./sponsors/sponsors.component";
import {GettingStartedComponent} from "./docs/getting-started/getting-started.component";

@NgModule({
  declarations: [
    HomeComponent,
    DocsComponent,
    BlogComponent,
    CommunityComponent,
    PluginsRegistryComponent,
    SponsorsComponent,
    GettingStartedComponent
  ],
  imports: [
    SharedModule,
    RouterOutlet
  ],
  exports: [
    HomeComponent,
    DocsComponent,
    BlogComponent,
    CommunityComponent,
    PluginsRegistryComponent,
    SponsorsComponent,
    GettingStartedComponent
  ]
})
export class CoreModule {
}
