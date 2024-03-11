import {Component} from '@angular/core';

import {DocsContentModel} from "../../../../../shared/component/docs-content/docs-content.model";

@Component({
  selector: 'repox-website-generate-home',
  templateUrl: './generate-introduction.component.html'
})
export class GenerateIntroductionComponent {
  content: DocsContentModel = {
    sections: [
      {
        type: "firstLevelHeader",
        value: "Generate"
      },
      {
        type: "newline"
      },
      {
        type: "secondLevelHeader",
        value: "Introduction"
      },
      {
        type: "newline"
      },
      {
        type: "paragraph",
        value: "The generate command in Repox plays a pivotal role in facilitating the management of monorepo projects. By invoking this command, users can dynamically create new projects or components within the monorepo structure, streamlining the development process. This command adheres to the principles of efficiency and scalability, enabling developers to maintain a cohesive codebase while accommodating diverse project requirements."
      },
      {
        type: "newline"
      },
      {
        type: "paragraph",
        value: "At its core, the generate command operates by leveraging predefined templates or schematics tailored to specific project needs. These templates encapsulate best practices, conventions, and configurations, ensuring consistency across project modules. Users can customize generation parameters, such as project type, language, or framework, to align with project specifications. By automating the scaffolding process, Repox empowers developers to focus on implementing business logic rather than repetitive setup tasks."
      },
      {
        type: "newline"
      },
      {
        type: "paragraph",
        value: "Moreover, the generate command fosters collaboration and standardization within development teams. By adhering to a unified structure enforced through generation templates, developers can easily navigate, understand, and contribute to various project modules. This standardization enhances code maintainability, reduces onboarding friction for new team members, and fosters a culture of code quality and consistency throughout the monorepo project ecosystem."
      }
    ]
  };
}
