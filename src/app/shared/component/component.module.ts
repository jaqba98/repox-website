import {NgModule} from "@angular/core";

import {SmartModule} from "./smart/smart.module";

@NgModule({
  imports: [SmartModule],
  exports: [SmartModule]
})
export class ComponentModule {
}
