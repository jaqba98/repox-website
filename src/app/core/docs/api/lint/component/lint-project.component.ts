import {Component} from "@angular/core";

import {DocsContentFormModel} from "@shared";

// >>> Prompt <<<
// Create a description of the "lint project" program. It should contain max 4 sentences. Use b1 English level.

@Component({
  selector: "rw-lint-project",
  template: "<repox-website-docs-container [content]='content'></repox-website-docs-container>"
})
export class LintProjectComponent {
  content: DocsContentFormModel = {
    sections: [
      {
        type: "firstLevelHeader",
        value: "Lint Project",
        link: "lint-project"
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
        value: `The "lint project" program in Repox provides a comprehensive toolset for ensuring code quality within monorepo projects. It scans through the codebase, identifying potential errors, style inconsistencies, and other issues based on predefined rulesets. By flagging problematic areas, it helps maintain a high standard of code cleanliness and readability across all projects within the repository. With its intuitive interface and customizable configurations, the lint project program empowers developers to catch and resolve issues early in the development cycle, promoting robust and maintainable codebases.`
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
        value: "repox lint project [options]"
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
            argument: "projects",
            alias: "p",
            description: "Projects that are to be fixed.",
            require: false,
            value: "string[]"
          },
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
        value: "repox lint project --projects=project1,project2 --fix"
      }
    ]
  };
}
