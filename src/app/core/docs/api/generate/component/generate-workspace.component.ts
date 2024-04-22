import {Component} from "@angular/core";

import {DocsContentFormModel} from "@shared";

// >>> Prompt <<<
// Create a description of the "generate workspace" program. It should contain max 4 sentences. Use b1 English level.

@Component({
  selector: "rw-generate-workspace",
  template: "<repox-website-docs-container [content]='content'></repox-website-docs-container>"
})
export class GenerateWorkspaceComponent {
  content: DocsContentFormModel = {
    sections: [
      {
        type: "firstLevelHeader",
        value: "Generate Workspace",
        link: "generate-workspace"
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
        value: `The "generate workspace" program in Repox allows users to quickly set up a new monorepo workspace with predefined configurations. With just a few simple commands, users can create a centralized environment for managing multiple projects within a single git repository. This streamlined process enhances efficiency and organization for development teams working on complex projects.`
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
        value: "repox generate workspace [options]"
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
            argument: "name",
            alias: "n",
            description: "The name of the workspace.",
            require: true,
            value: "string"
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
        value: "repox generate workspace --name=my-workspace"
      }
    ]
  };
}
