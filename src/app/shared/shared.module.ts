import {NavComponent} from "./components/nav/nav.component";
import {HeaderComponent} from "./components/header/header.component";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterLink} from "@angular/router";
import {MainFeaturesComponent} from "./components/main-features/main-features.component";

@NgModule({
  declarations: [
    NavComponent,
    HeaderComponent,
    MainFeaturesComponent
  ],
  imports: [CommonModule, RouterLink],
  exports: [
    NavComponent,
    HeaderComponent,
    MainFeaturesComponent
  ]
})
export class SharedModule {
}
