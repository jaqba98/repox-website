import {NgModule} from "@angular/core";

import {HomeComponent} from "./home/home.component";
import {BlogComponent} from "./blog/blog.component";
import {CommunityComponent} from "./community/community.component";
import {PluginsRegistryComponent} from "./plugins-registry/plugins-registry.component";
import {SponsorsComponent} from "./sponsors/sponsors.component";
import {DocsModule} from "./docs/docs.module";

@NgModule({
  declarations: [
    HomeComponent,
    BlogComponent,
    CommunityComponent,
    PluginsRegistryComponent,
    SponsorsComponent,
  ],
  imports: [
    DocsModule
  ],
  exports: [
    HomeComponent,
    BlogComponent,
    CommunityComponent,
    PluginsRegistryComponent,
    SponsorsComponent
  ]
})
export class CoreModule {
}
