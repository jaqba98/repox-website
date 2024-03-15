import {Component} from "@angular/core";

import {DocsContentModel} from "@shared";

@Component({
  selector: "rw-generate-workspace",
  template: "<repox-website-docs-container [content]='content'></repox-website-docs-container>"
})
export class GenerateWorkspaceComponent {
  content: DocsContentModel = {
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
        value: "The workspace generation section of Repox facilitates the creation of monorepo environments for " +
          "efficient project management. Users can initiate workspace generation with a simple command, " +
          "specifying project configurations and dependencies. Repox automates the setup process, creating a " +
          "unified workspace where multiple projects reside within a single Git repository. This streamlines " +
          "development workflows, allowing teams to manage dependencies, share code, and enforce consistent " +
          "standards seamlessly. With Repox, generating and maintaining monorepo workspaces becomes a " +
          "straightforward task, enhancing collaboration and productivity across the development lifecycle."
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
