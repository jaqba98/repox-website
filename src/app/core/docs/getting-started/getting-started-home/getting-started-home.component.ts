import {Component} from "@angular/core";

import {DocsContentFormModel} from "@shared";

@Component({
  selector: "rw-getting-started-home",
  template: "<repox-website-docs-container [content]='content'></repox-website-docs-container>"
})
export class GettingStartedHomeComponent {
  content: DocsContentFormModel = {
    sections: [
      {
        type: "firstLevelHeader",
        value: "Getting started",
        link: "getting-started"
      }
    ]
  };
}
