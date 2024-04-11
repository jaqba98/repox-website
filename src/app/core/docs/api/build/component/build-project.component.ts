import {Component} from "@angular/core";

import {DocsContentFormModel} from "@shared";

// >>> Prompt <<<
// Create a description of the "build project" program. It should contain max 4 sentences. Use b1 English level.

@Component({
  selector: "rw-build-project",
  template: "<repox-website-docs-container [content]='content'></repox-website-docs-container>"
})
export class BuildProjectComponent {
  content: DocsContentFormModel = {
    sections: [
      {
        type: "firstLevelHeader",
        value: "Build Project",
        link: "build-project"
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
        value: `The "build project" program in Repox automates the compilation process for monorepo projects. It streamlines the workflow by efficiently handling dependencies and ensuring consistency across projects within the repository. With simple commands, users can initiate builds for individual projects or the entire monorepo, facilitating seamless development and deployment processes. Whether it's compiling code, generating artifacts, or running tests, the build project program simplifies the task, enhancing productivity for developers.`
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
        value: "repox build project [options]"
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
            description: "Name of the project.",
            require: true,
            value: "string"
          },
          {
            argument: "prod",
            alias: "p",
            description: "Build the project in production mode.",
            require: false,
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
        value: "repox build project --name=example --prod"
      }
    ]
  };
}
