import {NgModule} from "@angular/core";

import {DocsModule} from "./docs/docs.module";

import {BlogComponent} from "./blog/blog.component";
import {CommunityComponent} from "./community/community.component";
import {HomeComponent} from "./home/home.component";
import {PluginsRegistryComponent} from "./plugins-registry/plugins-registry.component";
import {SponsorsComponent} from "./sponsors/sponsors.component";

@NgModule({
  declarations: [
    BlogComponent,
    CommunityComponent,
    HomeComponent,
    PluginsRegistryComponent,
    SponsorsComponent
  ],
  imports: [
    DocsModule
  ]
})
export class CoreModule {
}
