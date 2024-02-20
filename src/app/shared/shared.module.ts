import {NgModule} from "@angular/core";
import {RouterLink} from "@angular/router";
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";

import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

import {MenubarModule} from 'primeng/menubar';
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";

import {MainNavComponent} from "./component/main-nav/main-nav.component";

@NgModule({
  declarations: [
    MainNavComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterLink,
    NgOptimizedImage,
    FontAwesomeModule,
    MenubarModule,
    InputTextModule,
    ButtonModule
  ],
  exports: [
    MainNavComponent
  ]
})
export class SharedModule {
}
