import {Component} from "@angular/core";

import {DocsContentModel} from "@shared";

@Component({
  selector: "rw-generate-workspace",
  template: "<repox-website-docs-container [content]='content'></repox-website-docs-container>"
})
export class GenerateWorkspaceComponent {
  content: DocsContentModel = {
    sections: [
      {type: "firstLevelHeader", value: "Generate Workspace"},
      {type: "newline"},
      {
        type: "paragraph",
        value: "The generate workspace command creates a new workspace within the monorepo project managed by Repox. " +
          "A workspace serves as a container for projects within the monorepo."
      },
      {type: "newline"},
      {type: "secondLevelHeader", value: "Syntax"},
      {type: "command", value: "repox generate workspace [options]"},
      {type: "paragraph", value: "or"},
      {type: "command", value: "repox g w [options]"},
      {type: "newline"},
      {type: "secondLevelHeader", value: "Program arguments"},
      {type: "paragraph", value: "None"},
      {type: "newline"},
      {type: "secondLevelHeader", value: "Command arguments"},
      {
        type: "arguments",
        value: [
          {argument: "name", alias: "n", description: "The name of the workspace.", require: true, value: "string"}
        ]
      },
      {type: "newline"},
      {type: "secondLevelHeader", value: "Example"},
      {type: "command", value: "repox generate workspace --name=my-workspace"},
      {type: "paragraph", value: "or"},
      {type: "command", value: "repox g w -n=my-workspace"},
      {type: "newline"},
      {type: "secondLevelHeader", value: "Note"},
      {
        type: "paragraph",
        value: "Ensure that the workspace name is unique and adheres to file system naming conventions."
      }
    ]
  };
}
