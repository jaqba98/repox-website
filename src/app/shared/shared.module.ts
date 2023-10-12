import {NgModule} from "@angular/core";
import {NavComponent} from "./components/nav/nav.component";
import {NgFor} from "@angular/common";
import {RouterLink} from "@angular/router";

@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    NgFor,
    RouterLink
  ],
  exports: [
    NavComponent
  ]
})
export class SharedModule {
}
