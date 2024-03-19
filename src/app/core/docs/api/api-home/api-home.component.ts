import {Component} from "@angular/core";

import {DocsContentFormModel} from "@shared";

@Component({
  selector: "rw-api-home",
  template: "<repox-website-docs-container [content]='content'></repox-website-docs-container>"
})
export class ApiHomeComponent {
  content: DocsContentFormModel = {
    sections: [
      {
        type: "firstLevelHeader",
        value: "Api",
        link: "api"
      }
    ]
  };
}
