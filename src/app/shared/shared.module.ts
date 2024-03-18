import {NgModule} from "@angular/core";

import {SmartModule} from "./component/smart/smart.module";

import {TreeModule} from "primeng/tree";
import {MenubarModule} from "primeng/menubar";
import {ButtonModule} from "primeng/button";

import {AsideNavComponent} from "./component/aside-nav/aside-nav.component";
import {DocsContainerComponent} from "./component/docs-container/docs-container.component";
import {MainNavComponent} from "./component/main-nav/main-nav.component";
import {FormModule} from "./component/form/form.module";

@NgModule({
  declarations: [
    AsideNavComponent,
    DocsContainerComponent,
    MainNavComponent
  ],
  imports: [
    FormModule,
    SmartModule,
    TreeModule,
    MenubarModule,
    ButtonModule
  ],
  exports: [
    AsideNavComponent,
    DocsContainerComponent,
    MainNavComponent
  ]
})
export class SharedModule {
}
