import {NgModule} from "@angular/core";
import {NavComponent} from "./components/nav/nav.component";
import {NgClass, NgFor} from "@angular/common";
import {RouterLink} from "@angular/router";

@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    NgFor,
    RouterLink,
    NgClass
  ],
  exports: [
    NavComponent
  ]
})
export class SharedModule {
}
