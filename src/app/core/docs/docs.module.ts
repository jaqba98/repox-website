import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";

import {SharedModule} from "../../shared/shared.module";

import {DocsComponent} from "./docs.component";
import {ApiModule} from "./api/api.module";
import {ChangelogComponent} from './changelog/changelog.component';
import {ConceptsComponent} from './concepts/concepts.component';
import {ExtensionComponent} from './extension/extension.component';
import {FeaturesComponent} from './features/features.component';
import {GettingStartedComponent} from "./getting-started/getting-started.component";
import {PluginsComponent} from './plugins/plugins.component';

@NgModule({
  declarations: [
    DocsComponent,
    ChangelogComponent,
    ConceptsComponent,
    ExtensionComponent,
    FeaturesComponent,
    GettingStartedComponent,
    PluginsComponent
  ],
  imports: [
    RouterModule,
    SharedModule,
    ApiModule
  ]
})
export class DocsModule {
}
