import {Component} from "@angular/core";

import {DocsContentModel} from "@shared";

@Component({
  selector: "rw-regenerate-introduction",
  template: "<repox-website-docs-container [content]='content'></repox-website-docs-container>"
})
export class RegenerateIntroductionComponent {
  content: DocsContentModel = {
    sections: [
      {type: "firstLevelHeader", value: "Regenerate"}
    ]
  };
}
