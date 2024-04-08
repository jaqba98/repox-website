import {Component} from "@angular/core";

import {DocsContentFormModel} from "@shared";

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
        value: `The "build project" section of Repox facilitates the compilation and assembly of a specific project within the monorepo, employing defined build scripts, configurations, and dependency management to produce executable artifacts or libraries. This section streamlines the development workflow by providing fine-grained control over the build process and ensuring project-specific dependencies are accurately resolved and integrated.`
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
