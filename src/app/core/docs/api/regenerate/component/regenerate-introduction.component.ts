import {Component} from "@angular/core";

import {DocsContentFormModel} from "@shared";

@Component({
  selector: "rw-regenerate-introduction",
  template: "<repox-website-docs-container [content]='content'></repox-website-docs-container>"
})
export class RegenerateIntroductionComponent {
  content: DocsContentFormModel = {
    sections: [
      {
        type: "firstLevelHeader",
        value: "Regenerate",
        link: "generate"
      },
      {
        type: "newline"
      },
      {
        type: "paragraph",
        value: "Workspace regeneration is a pivotal aspect of managing a monorepo project efficiently. In the " +
          "context of Repox, workspace regeneration refers to the process of refreshing the workspace environment, " +
          "ensuring that all dependencies, configurations, and project states are up to date. This process is " +
          "essential for maintaining the integrity of the monorepo structure, enabling seamless collaboration " +
          "and streamlined development workflows."
      },
      {
        type: "newline"
      },
      {
        type: "paragraph",
        value: "Within Repox, workspace regeneration serves as a fundamental mechanism for developers to synchronize " +
          "their local environments with the latest changes in the monorepo. By initiating workspace regeneration, " +
          "developers can resolve any discrepancies between their local setup and the central repository, thereby " +
          "mitigating potential conflicts and ensuring consistency across the project. This proactive approach " +
          "fosters a cohesive development ecosystem, empowering teams to focus on building and iterating upon " +
          "features without disruptions."
      },
      {
        type: "newline"
      },
      {
        type: "paragraph",
        value: "Furthermore, workspace regeneration in Repox encompasses various functionalities tailored to the " +
          "specific needs of monorepo management. From updating dependencies to validating project configurations, " +
          "Repox streamlines the regeneration process, minimizing downtime and maximizing productivity. With robust " +
          "tools and comprehensive documentation, Repox empowers developers to efficiently regenerate workspaces, " +
          "fostering a collaborative and agile development environment conducive to innovation and growth."
      }
    ]
  };
}
