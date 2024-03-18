import {Component} from "@angular/core";

import {DocsContentModel} from "@shared";

@Component({
  selector: "rw-regenerate-workspace",
  template: "<repox-website-docs-container [content]='content'></repox-website-docs-container>"
})
export class RegenerateWorkspaceComponent {
  content: DocsContentModel = {
    sections: [
      {
        type: "firstLevelHeader",
        value: "Regenerate Workspace",
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
        value: "The workspace regeneration section in Repox provides users with the capability to regenerate the " +
          "entire monorepo workspace swiftly and efficiently. Through this feature, users can refresh their " +
          "development environment, ensuring consistency and reliability across projects within the repository. " +
          "Workspace regeneration facilitates the seamless integration of changes, dependencies, and configurations " +
          "across all projects housed within the monorepo. It streamlines the process of updating dependencies or " +
          "making structural changes, minimizing the risk of inconsistencies or conflicts. Ultimately, this section " +
          "empowers users to maintain a cohesive and up-to-date development environment for their monorepo projects."
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
