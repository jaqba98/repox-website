import {NgModule} from "@angular/core";
import {HomeComponent} from "./component/home/home.component";
import {SharedModule} from "../shared/shared.module";
import {PageNotFoundComponent} from "./component/page-not-found/page-not-found.component";
import {RouterOutlet} from "@angular/router";
import {DocumentationComponent} from "./component/documentation/documentation.component";
import {Example1Component} from "./component/documentation/example1/example1.component";
import {Example2Component} from "./component/documentation/example2/example2.component";

@NgModule({
  declarations: [
    HomeComponent,
    DocumentationComponent,
    Example1Component,
    Example2Component,
    PageNotFoundComponent
  ],
  imports: [
    SharedModule,
    RouterOutlet
  ],
  exports: [
    HomeComponent,
    DocumentationComponent,
    Example1Component,
    Example2Component,
    PageNotFoundComponent
  ]
})
export class CoreModule {
}
