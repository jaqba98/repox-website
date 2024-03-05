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
import {BreadcrumbComponent} from "./component/breadcrumb/breadcrumb.component";
import { DocsContainerComponent } from './component/docs-container/docs-container.component';
import {FieldsetModule} from "primeng/fieldset";
import {CardModule} from "primeng/card";
import {TableModule} from "primeng/table";

@NgModule({
  declarations: [
    MainNavComponent,
    AsideNavComponent,
    DocsContentComponent,
    BreadcrumbComponent,
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
    TableModule
  ],
  exports: [
    MainNavComponent,
    AsideNavComponent,
    DocsContentComponent,
    BreadcrumbComponent,
    DocsContainerComponent
  ]
})
export class SharedModule {
}
