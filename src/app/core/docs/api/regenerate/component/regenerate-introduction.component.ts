import {Component} from "@angular/core";

import {DocsContentFormModel} from "@shared";

@Component({
  selector: "rw-regenerate-introduction",
  template: "<repox-website-docs-container [content]='content'></repox-website-docs-container>"
})
export class RegenerateIntroductionComponent {
  content: DocsContentFormModel = {
    sections: [
      {type: "firstLevelHeader", value: "Regenerate", link: "regenerate"}
    ]
  };
}
