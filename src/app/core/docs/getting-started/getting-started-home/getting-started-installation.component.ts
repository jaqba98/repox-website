import {Component} from "@angular/core";

import {DocsContentFormModel} from "@shared";

@Component({
  selector: "rw-getting-started-installation",
  template: "<repox-website-docs-container [content]='content'></repox-website-docs-container>"
})
export class GettingStartedInstallationComponent {
  content: DocsContentFormModel = {
    sections: [
      {
        type: "firstLevelHeader",
        value: "Installation",
        link: "getting-started"
      },
      {
        type: "newline"
      },
      {
        type: "secondLevelHeader",
        value: "Prerequisites",
        link: "prerequisites"
      },
      {
        type: "paragraph",
        value: "Before installing Repox, ensure you have the following installed:"
      },
      {
        type: "paragraph",
        value: "- node.js"
      },
      {
        type: "paragraph",
        value: "- npm"
      },
      {
        type: "newline"
      },
      {
        type: "secondLevelHeader",
        value: "Installation Steps",
        link: "installation-steps"
      },
      {
        type: "paragraph",
        value: "To install Repox globally, follow these steps:"
      },
      {
        type: "paragraph",
        value: "1. Open your terminal or command prompt."
      },
      {
        type: "paragraph",
        value: "2. Run the following npm command with `-g` flag to install Repox globally:"
      },
      {
        type: "newline"
      },
      {
        type: "command",
        value: "npm install -g repox"
      },
      {
        type: "newline"
      },
      {
        type: "secondLevelHeader",
        value: "Verifing the installation",
        link: "verifing-the-installation"
      },
      {
        type: "paragraph",
        value: "To verify ther Repox was installed globally succesfully, you can run the following command to check the installed version:"
      },
      {
        type: "newline"
      },
      {
        type: "command",
        value: "repox --version"
      }
    ]
  };
}
