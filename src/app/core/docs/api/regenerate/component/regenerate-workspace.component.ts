import {Component} from "@angular/core";

import {DocsContentModel} from "@shared";

@Component({
  selector: "rw-regenerate-workspace",
  template: "<repox-website-docs-container [content]='content'></repox-website-docs-container>"
})
export class RegenerateWorkspaceComponent {
  content: DocsContentModel = {
    sections: [
      {type: "firstLevelHeader", value: "Regenerate Workspace", link: "regenerate-workspace"},
      {type: "newline"},
      {
        type: "paragraph",
        value: "The regenerate workspace command is used to regenerate the workspace configuration for a " +
          "monorepo project managed by Repox. This command is essential for updating the project structure or " +
          "resolving any inconsistencies within the workspace."
      },
      {type: "newline"},
      {type: "secondLevelHeader", value: "Syntax", link: "syntax"},
      {type: "command", value: "repox regenerate workspace [options]"},
      {type: "newline"},
      {type: "secondLevelHeader", value: "Program arguments", link: "program-arguments"},
      {type: "paragraph", value: "None"},
      {type: "newline"},
      {type: "secondLevelHeader", value: "Command arguments", link: "command-arguments"},
      {
        type: "arguments",
        value: [
          {argument: "force", alias: "f", description: "Force mode.", require: true, value: "boolean"}
        ]
      },
      {type: "newline"},
      {type: "secondLevelHeader", value: "Example", link: "example"},
      {type: "command", value: "repox regenerate workspace --force"},
      {type: "newline"},
      {type: "secondLevelHeader", value: "Note", link: "note"},
      {
        type: "paragraph",
        value: "Running this command will regenerate the workspace configuration based on the current state of the monorepo project. " +
          "Use with caution as it may overwrite existing configurations."
      },
      {
        type: "paragraph",
        value: "Ensure all changes are committed before executing this command to prevent data loss."
      }
    ]
  };
}
