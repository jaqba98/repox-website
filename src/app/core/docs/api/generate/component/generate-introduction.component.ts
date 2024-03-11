import {Component} from "@angular/core";

import {DocsContentModel} from "@shared";

@Component({
  selector: "rw-generate-introduction",
  template: "<repox-website-docs-container [content]='content'></repox-website-docs-container>"
})
export class GenerateIntroductionComponent {
  content: DocsContentModel = {
    sections: [
      {type: "firstLevelHeader", value: "Generate"},
      {type: "newline"},
      {
        type: "paragraph",
        value: "The generate command in Repox serves as a fundamental tool for efficiently managing monorepo projects. " +
          "As a key feature, it enables developers to automate the creation of new projects, modules, or components " +
          "within the monorepo structure. This command streamlines the development process by eliminating manual setup " +
          "tasks and ensuring consistency across project artifacts."
      },
      {type: "newline"},
      {
        type: "paragraph",
        value: "At its core, the generate command operates by utilizing predefined templates or blueprints tailored to " +
          "various project needs. These templates encapsulate best practices, conventions, and project standards, " +
          "providing developers with a solid foundation for their work. By leveraging these templates, developers " +
          "can quickly scaffold out new features or components with minimal effort, thereby accelerating development cycles."
      },
      {type: "newline"},
      {
        type: "paragraph",
        value: "Moreover, the generate command promotes collaboration and code reuse within the monorepo environment. " +
          "By abstracting common patterns and functionalities into reusable templates, developers can maintain " +
          "a consistent architecture across multiple projects within the monorepo. This not only enhances code " +
          "quality but also fosters a cohesive development ecosystem where teams can easily share and leverage each other's work."
      }
    ]
  };
}
