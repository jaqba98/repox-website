import {NgModule} from "@angular/core";

import {SmartModule} from "./component/smart/smart.module";

import {TreeModule} from "primeng/tree";
import {ButtonModule} from "primeng/button";

import {AsideNavComponent} from "./component/aside-nav/aside-nav.component";
import {DocsContainerComponent} from "./component/docs-container/docs-container.component";
import {FormModule} from "./component/form/form.module";

@NgModule({
  declarations: [
    AsideNavComponent,
    DocsContainerComponent
  ],
  imports: [
    FormModule,
    SmartModule,
    TreeModule,
    ButtonModule
  ],
  exports: [
    AsideNavComponent,
    DocsContainerComponent
  ]
})
export class SharedModule {
}
