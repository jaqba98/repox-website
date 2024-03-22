import {Component} from "@angular/core";

import {DocsContentFormModel} from "@shared";

@Component({
  selector: "rw-build-project",
  template: "<repox-website-docs-container [content]='content'></repox-website-docs-container>"
})
export class BuildProjectComponent {
  content: DocsContentFormModel = {
    sections: [
      {
        type: "firstLevelHeader",
        value: "Build Project",
        link: "generate-workspace"
      }
    ]
  };
}
