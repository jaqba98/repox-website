import {NgModule} from "@angular/core";
import {HomeComponent} from "./component/home/home.component";
import {SharedModule} from "../shared/shared.module";
import {PageNotFoundComponent} from "./component/page-not-found/page-not-found.component";
import {DocsComponent} from "./component/docs/docs.component";
import {SupportComponent} from "./component/support/support.component";
import {BlogComponent} from "./component/blog/blog.component";

@NgModule({
  declarations: [
    HomeComponent,
    DocsComponent,
    SupportComponent,
    BlogComponent,
    PageNotFoundComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    HomeComponent,
    DocsComponent,
    SupportComponent,
    BlogComponent,
    PageNotFoundComponent
  ]
})
export class CoreModule {
}
