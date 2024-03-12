import {NgModule} from "@angular/core";
import {RouterLink} from "@angular/router";
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";

import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

import {MenubarModule} from 'primeng/menubar';
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {TreeModule} from 'primeng/tree';
import {PanelModule} from 'primeng/panel';
import {BreadcrumbModule} from 'primeng/breadcrumb';

import {MainNavComponent} from "./component/main-nav/main-nav.component";
import {AsideNavComponent} from './component/aside-nav/aside-nav.component';
import {DocsContentComponent} from './component/docs-content/docs-content.component';
import {DocsContainerComponent} from './component/docs-container/docs-container.component';
import {FieldsetModule} from "primeng/fieldset";
import {CardModule} from "primeng/card";
import {TableModule} from "primeng/table";
import {ControlModule} from "./component/control/control.module";
import {DumbModule} from "./component/dumb/dumb.module";
import {ComponentModule} from "./component/component.module";

@NgModule({
  declarations: [
    MainNavComponent,
    AsideNavComponent,
    DocsContentComponent,
    DocsContainerComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterLink,
    NgOptimizedImage,
    FontAwesomeModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    TreeModule,
    PanelModule,
    BreadcrumbModule,
    FieldsetModule,
    CardModule,
    TableModule,
    ControlModule,
    DumbModule,
    ComponentModule
  ],
  exports: [
    MainNavComponent,
    AsideNavComponent,
    DocsContentComponent,
    DocsContainerComponent
  ]
})
export class SharedModule {
}
