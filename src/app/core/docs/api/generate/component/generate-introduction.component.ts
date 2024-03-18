import {Component} from "@angular/core";

import {DocsContentFormModel} from "@shared";

@Component({
  selector: "rw-generate-introduction",
  template: "<repox-website-docs-container [content]='content'></repox-website-docs-container>"
})
export class GenerateIntroductionComponent {
  content: DocsContentFormModel = {
    sections: [
      {
        type: "firstLevelHeader",
        value: "Generate",
        link: "generate"
      },
      {
        type: "newline"
      },
      {
        type: "paragraph",
        value: "Welcome to the Workspace Generation section of the Repox documentation! In this section, we'll " +
          "explore how Repox simplifies the management of monorepo projects by streamlining the process of creating " +
          "and organizing workspaces. A monorepo project, as the name suggests, consolidates multiple projects " +
          "within a single Git repository, facilitating efficient collaboration and code sharing among teams. " +
          "Repox takes inspiration from tools like NX (www.nx.dev) and enhances the monorepo experience with " +
          "its unique features and intuitive workflows."
      },
      {
        type: "newline"
      },
      {
        type: "paragraph",
        value: "Creating a workspace with Repox is a breeze. Whether you're starting a new project or " +
          "transitioning an existing one to a monorepo structure, Repox provides powerful commands and configurations " +
          "to set up your workspace quickly and effortlessly. With Repox, you can define project dependencies, " +
          "manage shared configurations, and orchestrate builds and tests across your entire monorepo with ease. " +
          "By centralizing your projects within a single repository, Repox enables seamless integration and " +
          "dependency management, fostering a cohesive development environment."
      },
      {
        type: "newline"
      },
      {
        type: "paragraph",
        value: "In this section, we'll delve into the details of workspace generation with Repox, covering essential " +
          "concepts, commands, and best practices. From initializing a new workspace to configuring project settings " +
          "and managing dependencies, you'll find comprehensive guidance to kickstart your monorepo journey with Repox. " +
          "Whether you're a seasoned developer seeking to optimize project organization or a team embarking on a " +
          "collaborative coding adventure, Repox empowers you to harness the full potential of monorepo development. " +
          "Let's dive in and unlock the efficiency and scalability of monorepo projects with Repox!"
      }
    ]
  };
}
