import {NgModule} from "@angular/core";
import {NavComponent} from "./component/nav/nav.component";
import {HeaderComponent} from "./component/header/header.component";
import {MainFeaturesComponent} from "./component/main-features/main-features.component";
import {StatisticsComponent} from "./component/statistics/statistics.component";
import {AboutComponent} from "./component/about/about.component";
import {VideoComponent} from "./component/video/video.component";
import {TeamComponent} from "./component/team/team.component";
import {SupportingComponent} from "./component/supporting/supporting.component";
import {FooterComponent} from "./component/footer/footer.component";

@NgModule({
  declarations: [
    NavComponent,
    HeaderComponent,
    MainFeaturesComponent,
    StatisticsComponent,
    AboutComponent,
    VideoComponent,
    TeamComponent,
    SupportingComponent,
    FooterComponent
  ],
  exports: [
    NavComponent,
    HeaderComponent,
    MainFeaturesComponent,
    StatisticsComponent,
    AboutComponent,
    VideoComponent,
    TeamComponent,
    SupportingComponent,
    FooterComponent
  ]
})
export class SharedModule {
}
