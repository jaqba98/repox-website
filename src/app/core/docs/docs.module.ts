import {NgModule} from "@angular/core";

import {DocsComponent} from "./docs.component";
import {GettingStartedComponent} from "./getting-started/getting-started.component";
import {FeaturesComponent} from './features/features.component';
import {ConceptsComponent} from './concepts/concepts.component';
import {ExtensionComponent} from './extension/extension.component';
import {PluginsComponent} from './plugins/plugins.component';
import {ChangelogComponent} from './changelog/changelog.component';
import {ApiModule} from "./api/api.module";
import {SharedModule} from "@shared";
import {RouterLink, RouterOutlet} from "@angular/router";

@NgModule({
  declarations: [
    DocsComponent,
    GettingStartedComponent,
    FeaturesComponent,
    ConceptsComponent,
    ExtensionComponent,
    PluginsComponent,
    ChangelogComponent
  ],
  imports: [
    ApiModule,
    SharedModule,
    RouterOutlet,
    RouterLink
  ],
  exports: [
    DocsComponent,
    GettingStartedComponent,
    FeaturesComponent,
    ConceptsComponent,
    ExtensionComponent,
    PluginsComponent,
    ChangelogComponent
  ]
})
export class DocsModule {
}
