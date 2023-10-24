import {NavComponent} from "./components/nav/nav.component";
import {HeaderComponent} from "./components/header/header.component";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterLink} from "@angular/router";
import {MainFeaturesComponent} from "./components/main-features/main-features.component";
import {FooterComponent} from "./components/footer/footer.component";
import {TeamComponent} from "./components/team/team.component";
import {Page1Component} from "./components/documentation/page1/page1.component";
import {Page2Component} from "./components/documentation/page2/page2.component";

@NgModule({
  declarations: [
    NavComponent,
    HeaderComponent,
    MainFeaturesComponent,
    TeamComponent,
    FooterComponent,
    Page1Component,
    Page2Component
  ],
  imports: [CommonModule, RouterLink],
  exports: [
    NavComponent,
    HeaderComponent,
    MainFeaturesComponent,
    TeamComponent,
    FooterComponent,
    Page1Component,
    Page2Component
  ]
})
export class SharedModule {
}
