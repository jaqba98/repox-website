import {BlogComponent} from "./components/blog/blog.component";
import {DocumentationComponent} from "./components/documentation/documentation.component";
import {DonationComponent} from "./components/donation/donation.component";

import {NgModule} from "@angular/core";
import {HomeComponent} from "./components/home/home.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {SharedModule} from "../shared/shared.module";
import {RouterLink, RouterOutlet} from "@angular/router";

@NgModule({
    declarations: [
        BlogComponent,
        DocumentationComponent,
        DonationComponent,
        HomeComponent,
        PageNotFoundComponent
    ],
  imports: [
    SharedModule,
    RouterOutlet,
    RouterLink
  ],
    exports: [
        BlogComponent,
        DocumentationComponent,
        DonationComponent,
        HomeComponent,
        PageNotFoundComponent
    ]
})
export class CoreModule {
}
