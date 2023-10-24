import {NavComponent} from "./components/nav/nav.component";
import {HeaderComponent} from "./components/header/header.component";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterLink} from "@angular/router";
import {MainFeaturesComponent} from "./components/main-features/main-features.component";
import {FooterComponent} from "./components/footer/footer.component";
import {TeamComponent} from "./components/team/team.component";
import {DocumentationMenuComponent} from "./components/documentation-menu/documentation-menu.component";
import {DocumentationContentComponent} from "./components/documentation-content/documentation-content.component";

@NgModule({
  declarations: [
    NavComponent,
    HeaderComponent,
    MainFeaturesComponent,
    TeamComponent,
    FooterComponent,
    DocumentationMenuComponent,
    DocumentationContentComponent
  ],
  imports: [CommonModule, RouterLink],
  exports: [
    NavComponent,
    HeaderComponent,
    MainFeaturesComponent,
    TeamComponent,
    FooterComponent,
    DocumentationMenuComponent,
    DocumentationContentComponent
  ]
})
export class SharedModule {
}
