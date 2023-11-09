import {NgModule} from "@angular/core";
import {RouterLink} from "@angular/router";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";

import {NavComponent} from "./component/nav/nav.component";
import {HeaderComponent} from "./component/header/header.component";
import {MainFeaturesComponent} from "./component/main-features/main-features.component";
import {StatisticsComponent} from "./component/statistics/statistics.component";
import {AboutComponent} from "./component/about/about.component";
import {TeamComponent} from "./component/team/team.component";
import {FooterComponent} from "./component/footer/footer.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [
    NavComponent,
    HeaderComponent,
    MainFeaturesComponent,
    StatisticsComponent,
    AboutComponent,
    TeamComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterLink,
    FontAwesomeModule
  ],
  exports: [
    NavComponent,
    HeaderComponent,
    MainFeaturesComponent,
    StatisticsComponent,
    AboutComponent,
    TeamComponent,
    FooterComponent
  ]
})
export class SharedModule {
}
