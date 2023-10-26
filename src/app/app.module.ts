import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NavComponent} from "./shared/component/nav/nav.component";
import {HeaderComponent} from "./shared/component/header/header.component";
import {MainFeaturesComponent} from "./shared/component/main-features/main-features.component";
import {StatisticsComponent} from "./shared/component/statistics/statistics.component";
import {AboutComponent} from "./shared/component/about/about.component";
import {VideoComponent} from "./shared/component/video/video.component";
import {TeamComponent} from "./shared/component/team/team.component";
import {SupportingComponent} from "./shared/component/supporting/supporting.component";
import {FooterComponent} from "./shared/component/footer/footer.component";
import {SharedModule} from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
