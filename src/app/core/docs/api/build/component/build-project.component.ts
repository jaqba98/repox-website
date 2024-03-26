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
        value: "In the project build section, Repox streamlines the compilation and deployment processes across " +
               "the monorepo project. Through intuitive configuration settings, developers can define build pipelines " +
               "tailored to individual projects' needs. Repox automates dependency resolution and management, reducing " +
               "the complexity of handling inter-project dependencies. With robust error handling and logging capabilities, " +
               "it facilitates quick identification and resolution of build issues. Additionally, the project build section " + 
               "offers seamless integration with continuous integration (CI) and continuous deployment (CD) systems, " + 
               "enabling smooth and efficient deployment pipelines."
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
        value: "repox build project --name=example"
      }
    ]
  };
}
