import {NgModule} from "@angular/core";
import {HomeComponent} from "./component/home/home.component";
import {SharedModule} from "../shared/shared.module";
import {PageNotFoundComponent} from "./component/page-not-found/page-not-found.component";
import {DocsComponent} from "./component/docs/docs.component";
import {SupportComponent} from "./component/support/support.component";
import {BlogComponent} from "./component/blog/blog.component";
import {Example1Component} from "./component/docs/example1/example1.component";
import {Example2Component} from "./component/docs/example2/example2.component";
import {RouterOutlet} from "@angular/router";

@NgModule({
  declarations: [
    HomeComponent,
    DocsComponent,
    SupportComponent,
    BlogComponent,
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
    DocsComponent,
    SupportComponent,
    BlogComponent,
    Example1Component,
    Example2Component,
    PageNotFoundComponent
  ]
})
export class CoreModule {
}
