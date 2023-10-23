import {NavComponent} from "./components/nav/nav.component";
import {HeaderComponent} from "./components/header/header.component";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterLink} from "@angular/router";
import {MainFeaturesComponent} from "./components/main-features/main-features.component";
import {FooterComponent} from "./components/footer/footer.component";

@NgModule({
  declarations: [
    NavComponent,
    HeaderComponent,
    MainFeaturesComponent,
    FooterComponent
  ],
  imports: [CommonModule, RouterLink],
  exports: [
    NavComponent,
    HeaderComponent,
    MainFeaturesComponent,
    FooterComponent
  ]
})
export class SharedModule {
}
