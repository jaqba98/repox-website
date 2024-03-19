import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";

import {SharedModule} from "../../shared/shared.module";

import {DocsComponent} from "./docs.component";
import {ApiModule} from "./api/api.module";
import {ChangelogComponent} from './changelog/changelog.component';
import {ConceptsComponent} from './concepts/concepts.component';
import {ExtensionComponent} from './extension/extension.component';
import {FeaturesComponent} from './features/features.component';
import {PluginsComponent} from './plugins/plugins.component';
import {GettingStartedModule} from "./getting-started/getting-started.module";

@NgModule({
  declarations: [
    DocsComponent,
    ChangelogComponent,
    ConceptsComponent,
    ExtensionComponent,
    FeaturesComponent,
    PluginsComponent
  ],
  imports: [
    RouterModule,
    SharedModule,
    ApiModule,
    GettingStartedModule
  ]
})
export class DocsModule {
}
