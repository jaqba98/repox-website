import {NgModule} from "@angular/core";
import {TopNavComponent} from "./component/top-nav/top-nav.component";
import {HeaderComponent} from "./component/header/header.component";
import {MainFeaturesComponent} from "./component/main-features/main-features.component";
import {StatisticsComponent} from "./component/statistics/statistics.component";
import {AboutComponent} from "./component/about/about.component";
import {VideoComponent} from "./component/video/video.component";
import {TeamComponent} from "./component/team/team.component";
import {SupportingComponent} from "./component/supporting/supporting.component";
import {FooterComponent} from "./component/footer/footer.component";
import {RouterLink} from "@angular/router";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {DocsNavComponent} from "./component/docs-nav/docs-nav.component";

@NgModule({
  declarations: [
    TopNavComponent,
    HeaderComponent,
    MainFeaturesComponent,
    StatisticsComponent,
    AboutComponent,
    VideoComponent,
    TeamComponent,
    SupportingComponent,
    FooterComponent,
    DocsNavComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterLink
  ],
  exports: [
    TopNavComponent,
    HeaderComponent,
    MainFeaturesComponent,
    StatisticsComponent,
    AboutComponent,
    VideoComponent,
    TeamComponent,
    SupportingComponent,
    FooterComponent,
    DocsNavComponent
  ]
})
export class SharedModule {
}
