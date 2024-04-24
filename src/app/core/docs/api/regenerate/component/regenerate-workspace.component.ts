import {Component} from "@angular/core";

import {DocsContentFormModel} from "@shared";

// >>> Prompt <<<
// Create a description of the "regenerate workspace" program. It should contain max 4 sentences. Use b1 English level.

@Component({
  selector: "rw-regenerate-workspace",
  template: "<repox-website-docs-container [content]='content'></repox-website-docs-container>"
})
export class RegenerateWorkspaceComponent {
  content: DocsContentFormModel = {
    sections: [
      {
        type: "firstLevelHeader",
        value: "Regenerate Workspace",
        link: "regenerate-workspace"
      },
      {
        type: "newline"
      },
      {
        type: "secondLevelHeader",
        value: "Description",
        link: "description"
      },
      {
        type: "paragraph",
        value: `The "regenerate workspace" program is designed to refresh and update the workspace environment in the Repox software. This tool ensures that all dependencies and configurations within the monorepo project are synchronized and up-to-date. By running this program, users can efficiently regenerate their workspace, enabling smoother development workflows and ensuring project integrity.`
      },
      {
        type: "newline"
      },
      {
        type: "secondLevelHeader",
        value: "Syntax",
        link: "syntax"
      },
      {
        type: "command",
        value: "repox regenerate workspace [options]"
      },
      {
        type: "newline"
      },
      {
        type: "secondLevelHeader",
        value: "Program arguments",
        link: "program-arguments"
      },
      {
        type: "info",
        value: "No arguments"
      },
      {
        type: "newline"
      },
      {
        type: "secondLevelHeader",
        value: "Command arguments",
        link: "command-arguments"
      },
      {
        type: "arguments",
        value: [
          {
            argument: "force",
            alias: "f",
            description: "Run in the force mode.",
            require: true,
            value: "boolean"
          }
        ]
      },
      {
        type: "newline"
      },
      {
        type: "secondLevelHeader",
        value: "Example",
        link: "example"
      },
      {
        type: "command",
        value: "repox regenerate workspace --force"
      }
    ]
  };
}
