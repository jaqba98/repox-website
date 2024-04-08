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
        value: `The "build project" section in Repox helps put together a specific project within the monorepo. It uses set instructions and settings to compile code and handle dependencies effectively. This section simplifies the process of creating executable files or libraries for the project. It ensures that the necessary steps are taken to build the project correctly, making development smoother for users.`
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
