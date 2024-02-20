import {NgModule} from "@angular/core";
import {RouterOutlet} from "@angular/router";

import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    RouterOutlet
  ],
  exports: []
})
export class CoreModule {
}
