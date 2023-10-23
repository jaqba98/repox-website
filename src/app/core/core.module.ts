import {BlogComponent} from "./components/blog/blog.component";
import {DocumentationComponent} from "./components/documentation/documentation.component";
import {DonationComponent} from "./components/donation/donation.component";

import {NgModule} from "@angular/core";
import {HomeComponent} from "./components/home/home.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {SharedModule} from "../shared/shared.module";

@NgModule({
    declarations: [
        BlogComponent,
        DocumentationComponent,
        DonationComponent,
        HomeComponent,
        PageNotFoundComponent
    ],
    imports: [
        SharedModule
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
