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
import { FeaturesComponent } from './docs/features/features.component';
import { ConceptsComponent } from './docs/concepts/concepts.component';
import { ExtensionComponent } from './docs/extension/extension.component';
import { PluginsComponent } from './docs/plugins/plugins.component';
import { ApiComponent } from './docs/api/api.component';
import { ChangelogComponent } from './docs/changelog/changelog.component';

@NgModule({
  declarations: [
    HomeComponent,
    DocsComponent,
    BlogComponent,
    CommunityComponent,
    PluginsRegistryComponent,
    SponsorsComponent,
    GettingStartedComponent,
    FeaturesComponent,
    ConceptsComponent,
    ExtensionComponent,
    PluginsComponent,
    ApiComponent,
    ChangelogComponent
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
    GettingStartedComponent,
    FeaturesComponent
  ]
})
export class CoreModule {
}
