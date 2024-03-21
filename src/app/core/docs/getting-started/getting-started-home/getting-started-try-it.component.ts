import {Component} from "@angular/core";

import {DocsContentFormModel} from "@shared";

@Component({
  selector: "rw-getting-started-try-it",
  template: "<repox-website-docs-container [content]='content'></repox-website-docs-container>"
})
export class GettingStartedTryItComponent {
  content: DocsContentFormModel = {
    sections: [
      {
        type: "firstLevelHeader",
        value: "Try it",
        link: "try-it"
      }
    ]
  };
}
