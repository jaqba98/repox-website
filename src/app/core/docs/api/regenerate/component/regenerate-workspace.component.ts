import {Component} from "@angular/core";

import {DocsContentModel} from "@shared";

@Component({
  selector: "rw-regenerate-workspace",
  template: "<repox-website-docs-container [content]='content'></repox-website-docs-container>"
})
export class RegenerateWorkspaceComponent {
  content: DocsContentModel = {
    sections: [
      {type: "firstLevelHeader", value: "Regenerate Workspace"}
    ]
  };
}
