import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {BlogComponent} from "./core/components/blog/blog.component";
import {DocumentationComponent} from "./core/components/documentation/documentation.component";
import {DonationComponent} from "./core/components/donation/donation.component";
import {HomeComponent} from "./core/components/home/home.component";
import {PageNotFoundComponent} from "./core/components/page-not-found/page-not-found.component";
import {Page1Component} from "./shared/components/documentation/page1/page1.component";
import {Page2Component} from "./shared/components/documentation/page2/page2.component";

export const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "blog", component: BlogComponent },
  {
    path: "documentation",
    component: DocumentationComponent,
    children: [
      { path: "page1", component: Page1Component },
      { path: "page2", component: Page2Component }
    ]
  },
  { path: "donation", component: DonationComponent },
  { path: "home", component: HomeComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
