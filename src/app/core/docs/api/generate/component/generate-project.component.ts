import {Component} from "@angular/core";

import {DocsContentFormModel} from "@shared";

@Component({
  selector: "rw-generate-project",
  template: "<repox-website-docs-container [content]='content'></repox-website-docs-container>"
})
export class GenerateProjectComponent {
  content: DocsContentFormModel = {
    sections: [
      {
        type: "firstLevelHeader",
        value: "Generate Project",
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
        value: "The project generation section of Repox facilitates the seamless " +
          "creation of new projects within a monorepo environment. Users can easily " +
          "specify project configurations, dependencies, and folder structures to " +
          "tailor the generated projects to their specific needs. Repox " +
          "streamlines the process by automating common tasks such as " +
          "setting up initial files and configurations, ensuring consistency " +
          "across projects. With support for various project types and frameworks, " +
          "users can efficiently kickstart development without the hassle of " +
          "manual setup. Additionally, Repox provides options for custom " +
          "templates and presets, allowing for further customization and " +
          "flexibility in project generation."
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
        value: "repox generate project [options]"
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
            argument: "path",
            alias: "p",
            description: "Path of the project.",
            require: true,
            value: "string"
          },
          {
            argument: "type",
            alias: "t",
            description: "Type of the project.",
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
        value: "repox generate project --name=example --path=./projects/apps --type=app"
      }
    ]
  };
}
