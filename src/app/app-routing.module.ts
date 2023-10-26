import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {HomeComponent} from "./core/component/home/home.component";
import {PageNotFoundComponent} from "./core/component/page-not-found/page-not-found.component";
import {DocsComponent} from "./core/component/docs/docs.component";
import {SupportComponent} from "./core/component/support/support.component";
import {BlogComponent} from "./core/component/blog/blog.component";
import {Example1Component} from "./core/component/docs/example1/example1.component";
import {Example2Component} from "./core/component/docs/example2/example2.component";

export const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  {
    path: "docs",
    component: DocsComponent,
    children: [
      { path: "", redirectTo: "example1", pathMatch: "full" },
      { path: "example1", component: Example1Component },
      { path: "example2", component: Example2Component }
    ]
  },
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
