import {NgModule} from "@angular/core";
import {RouterLink} from "@angular/router";
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";

import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

import {MenubarModule} from 'primeng/menubar';
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {TreeModule} from 'primeng/tree';

import {MainNavComponent} from "./component/main-nav/main-nav.component";
import {AsideNavComponent} from './component/aside-nav/aside-nav.component';

@NgModule({
  declarations: [
    MainNavComponent,
    AsideNavComponent
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
    TreeModule
  ],
  exports: [
    MainNavComponent,
    AsideNavComponent
  ]
})
export class SharedModule {
}
