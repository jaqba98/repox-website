import {Component} from "@angular/core";

import {DocsContentFormModel} from "@shared";

@Component({
  selector: "rw-getting-started-installation",
  template: "<repox-website-docs-container [content]='content'></repox-website-docs-container>"
})
export class GettingStartedInstallationComponent {
  content: DocsContentFormModel = {
    sections: [
      {
        type: "firstLevelHeader",
        value: "Installation",
        link: "getting-started"
      }
    ]
  };
}
