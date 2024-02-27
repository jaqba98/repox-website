import {Routes} from "@angular/router";

import {GettingStartedComponent} from "./getting-started/getting-started.component";
import {FeaturesComponent} from "./features/features.component";
import {ConceptsComponent} from "./concepts/concepts.component";
import {ExtensionComponent} from "./extension/extension.component";
import {PluginsComponent} from "./plugins/plugins.component";
import {ApiComponent} from "./api/api.component";
import {ChangelogComponent} from "./changelog/changelog.component";
import {API_ROUTING} from "./api/api-routing.module";

export const DOCS_ROUTING: Routes = [
  {path: "", redirectTo: "getting-started", pathMatch: "full"},
  {path: "getting-started", component: GettingStartedComponent},
  {path: "features", component: FeaturesComponent},
  {path: "concepts", component: ConceptsComponent},
  {path: "extension", component: ExtensionComponent},
  {path: "plugins", component: PluginsComponent},
  {path: "api", component: ApiComponent, children: API_ROUTING},
  {path: "changelog", component: ChangelogComponent}
];
