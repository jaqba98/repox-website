import {Component} from "@angular/core";

import {DocsContentFormModel} from "@shared";

@Component({
  selector: "rw-lint",
  template: "<repox-website-docs-container [content]='content'></repox-website-docs-container>"
})
export class LintComponent {
  content: DocsContentFormModel = {
    sections: [
      {
        type: "firstLevelHeader",
        value: "Lint",
        link: "lint"
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
        value: "Lorem ipsum"
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
        value: "repox lint [options]"
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
        type: "arguments",
        value: [
          {
            argument: "projects",
            alias: "p",
            description: "List of projects to check.",
            require: false,
            value: "string[]"
          },
          {
            argument: "fix",
            alias: "f",
            description: "Correct simple mistakes automatically.",
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
        value: "Command arguments",
        link: "command-arguments"
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
        value: "Example",
        link: "example"
      },
      {
        type: "command",
        value: "repox lint --projects=example1,example2 --fix"
      }
    ]
  };
}
