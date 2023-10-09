import {BlogComponent} from "./components/blog/blog.component";
import {DocumentationComponent} from "./components/documentation/documentation.component";
import {DonationComponent} from "./components/donation/donation.component";

import {NgModule} from "@angular/core";
import {HomeComponent} from "./components/home/home.component";
import {TeamComponent} from "./components/team/team.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";

@NgModule({
  declarations: [
    BlogComponent,
    DocumentationComponent,
    DonationComponent,
    HomeComponent,
    TeamComponent,
    PageNotFoundComponent
  ]
})
export class CoreModule {
}
