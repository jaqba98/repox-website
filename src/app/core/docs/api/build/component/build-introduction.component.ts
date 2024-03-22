import {Component} from "@angular/core";

import {DocsContentFormModel} from "@shared";

@Component({
  selector: "rw-build-introduction",
  template: "<repox-website-docs-container [content]='content'></repox-website-docs-container>"
})
export class BuildIntroductionComponent {
  content: DocsContentFormModel = {
    sections: [
      {
        type: "firstLevelHeader",
        value: "Build",
        link: "generate"
      }
    ]
  };
}
