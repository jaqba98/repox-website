import {NavComponent} from "./components/nav/nav.component";
import {HeaderComponent} from "./components/header/header.component";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterLink} from "@angular/router";

@NgModule({
  declarations: [
    NavComponent,
    HeaderComponent
  ],
  imports: [CommonModule, RouterLink],
  exports: [
    NavComponent,
    HeaderComponent
  ]
})
export class SharedModule {
}
