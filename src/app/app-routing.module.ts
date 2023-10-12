import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {BlogComponent} from "./core/components/blog/blog.component";
import {DocumentationComponent} from "./core/components/documentation/documentation.component";
import {DonationComponent} from "./core/components/donation/donation.component";
import {HomeComponent} from "./core/components/home/home.component";
import {TeamComponent} from "./core/components/team/team.component";
import {PageNotFoundComponent} from "./core/components/page-not-found/page-not-found.component";

export const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "blog", component: BlogComponent },
  { path: "documentation", component: DocumentationComponent },
  { path: "donation", component: DonationComponent },
  { path: "home", component: HomeComponent },
  { path: "team", component: TeamComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
