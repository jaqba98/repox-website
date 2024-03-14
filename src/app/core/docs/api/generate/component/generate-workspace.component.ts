import {Component} from "@angular/core";

import {DocsContentModel} from "@shared";

@Component({
  selector: "rw-generate-workspace",
  template: "<repox-website-docs-container [content]='content'></repox-website-docs-container>"
})
export class GenerateWorkspaceComponent {
  content: DocsContentModel = {
    sections: [
      {type: "firstLevelHeader", value: "Generate Workspace", link: "generate-workspace"},
      {type: "newline"},
      {
        type: "paragraph",
        value: "The generate workspace command creates a new workspace within the monorepo project managed by Repox. " +
          "A workspace serves as a container for projects within the monorepo."
      },
      {type: "newline"},
      {type: "secondLevelHeader", value: "Syntax", link: "syntax"},
      {type: "command", value: "repox generate workspace [options]"},
      {type: "newline"},
      {type: "secondLevelHeader", value: "Program arguments", link: "program-arguments"},
      {type: "info", value: "No arguments for the program"},
      {type: "newline"},
      {type: "secondLevelHeader", value: "Command arguments", link: "command-arguments"},
      {
        type: "arguments",
        value: [
          {argument: "name", alias: "n", description: "The name of the workspace.", require: true, value: "string"}
        ]
      },
      {type: "newline"},
      {type: "secondLevelHeader", value: "Example", link: "example"},
      {type: "command", value: "repox generate workspace --name=my-workspace"},
      {type: "newline"},
      {type: "secondLevelHeader", value: "Note", link: "note"},
      {
        type: "paragraph",
        value: "Ensure that the workspace name is unique and adheres to file system naming conventions."
      }
    ]
  };
}
