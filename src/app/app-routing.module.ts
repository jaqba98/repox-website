import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {HomeComponent} from "./core/component/home/home.component";
import {PageNotFoundComponent} from "./core/component/page-not-found/page-not-found.component";
import {DocsComponent} from "./core/component/docs/docs.component";
import {SupportComponent} from "./core/component/support/support.component";
import {BlogComponent} from "./core/component/blog/blog.component";

export const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "docs", component: DocsComponent },
  { path: "support", component: SupportComponent },
  { path: "blog", component: BlogComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
