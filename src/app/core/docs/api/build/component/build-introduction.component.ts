import {Component} from "@angular/core";

import {DocsContentFormModel} from "@shared";

@Component({
  selector: "rw-build-introduction",
  template: "<repox-website-docs-container [content]='content'></repox-website-docs-container>"
})
export class BuildIntroductionComponent {
  content: DocsContentFormModel = {
    sections: [
      {
        type: "firstLevelHeader",
        value: "Build",
        link: "generate"
      },
      {
        type: "newline"
      },
      {
        type: "paragraph",
        value: "In the realm of modern software development, managing monorepo projects presents unique challenges " +
               "and opportunities. At the heart of this complexity lies the project build section, a pivotal component " +
               "within Repox software. This section serves as the cornerstone for compiling, testing, and packaging the " +
               "diverse array of projects housed within a monorepo architecture. Whether it's a collection of microservices, " +
               "libraries, or applications, Repox streamlines the build process, offering developers a unified platform to " +
               "orchestrate their development workflows efficiently."
      },
      {
        type: "newline"
      },
      {
        type: "paragraph",
        value: "The build project section within Repox empowers developers with granular control over the build lifecycle " +
               "of individual projects. Through a user-friendly interface, developers can define custom build configurations " +
               "tailored to each project's requirements. This flexibility extends to dependency management, enabling Repox " +
               "to intelligently handle dependencies between projects within the monorepo. By automating these intricate " +
               "tasks, Repox simplifies the development experience, allowing teams to focus on building robust and scalable " + 
               "software solutions."
      },
      {
        type: "newline"
      },
      {
        type: "paragraph",
        value: "Moreover, the build project section in Repox is designed with scalability and performance in mind. " +
               "Leveraging parallelization and caching mechanisms, Repox optimizes build times, ensuring swift " +
               "iterations and rapid feedback loops. Whether it's a small-scale project or a sprawling monorepo, " +
               "Repox scales seamlessly, providing consistent and reliable build outcomes. In essence, the build " +
               "project section embodies Repox's commitment to empowering developers, streamlining their workflows, " +
               "and unlocking the full potential of monorepo development."
      }
    ]
  };
}
