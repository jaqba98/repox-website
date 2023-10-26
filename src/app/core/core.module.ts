import {NgModule} from "@angular/core";
import {HomeComponent} from "./component/home/home.component";
import {SharedModule} from "../shared/shared.module";
import {PageNotFoundComponent} from "./component/page-not-found/page-not-found.component";
import {DocsComponent} from "./component/docs/docs.component";

@NgModule({
  declarations: [
    HomeComponent,
    DocsComponent,
    PageNotFoundComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    HomeComponent,
    DocsComponent,
    PageNotFoundComponent
  ]
})
export class CoreModule {
}
