import {Component} from "@angular/core";

import {DocsContentFormModel} from "@shared";

// >>> Prompt <<<
// Create a description of the "lint workspace" program. It should contain max 4 sentences. Use b1 English level.

@Component({
  selector: "rw-lint-workspace",
  template: "<repox-website-docs-container [content]='content'></repox-website-docs-container>"
})
export class LintWorkspaceComponent {
  content: DocsContentFormModel = {
    sections: [
      {
        type: "firstLevelHeader",
        value: "Lint Workspace",
        link: "lint-workspace"
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
        value: `The "lint workspace" program in Repox ensures code quality by analyzing the entire monorepo project for potential issues. It scans code for errors, style violations, and other inconsistencies, helping developers maintain clean and consistent code across all projects within the repository. The program offers customizable rules and configurations to tailor linting according to project requirements, facilitating efficient development workflows.`
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
        value: "repox lint workspace [options]"
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
            argument: "fix",
            alias: "f",
            description: "Fix mistakes automatically.",
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
        value: "repox lint workspace --fix"
      }
    ]
  };
}
