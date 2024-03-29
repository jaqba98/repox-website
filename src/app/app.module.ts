import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";

import {AppComponent} from './app.component';

import {CoreModule} from "./core/core.module";
import {SharedModule} from "./shared/shared.module";
import {AppRoutingModule} from "./app-routing.module";
import {SmartModule} from "./shared/component/smart/smart.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
    SmartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
