import {BlogComponent} from "./components/blog/blog.component";
import {DocumentationComponent} from "./components/documentation/documentation.component";
import {DonationComponent} from "./components/donation/donation.component";

import {NgModule} from "@angular/core";
import {HomeComponent} from "./components/home/home.component";
import {TeamComponent} from "./components/team/team.component";

@NgModule({
  declarations: [
    BlogComponent,
    DocumentationComponent,
    DonationComponent,
    HomeComponent,
    TeamComponent
  ]
})
export class CoreModule {
}
