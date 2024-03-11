import { Component } from '@angular/core';

import {DocsContentModel} from "../../../../../shared/component/docs-content/docs-content.model";

@Component({
  selector: 'repox-website-workspace',
  templateUrl: './generate-workspace.component.html'
})
export class GenerateWorkspaceComponent {
  content: DocsContentModel = {
    sections: [
      {
        type: "h1",
        value: "Generate Workspace"
      },
      { type: "newline" },
      {
        type: "p",
        value: "The generate workspace command creates a new workspace within the monorepo project managed by Repox. A workspace serves as a container for projects within the monorepo."
      },
      { type: "newline" },
      {
        type: "h2",
        value: "Syntax"
      },
      {
        type: "command",
        value: "repox generate workspace [options]"
      },
      {
        type: "p",
        value: "or"
      },
      {
        type: "command",
        value: "repox g w [options]"
      },
      { type: "newline" },
      {
        type: "h2",
        value: "Program arguments"
      },
      {
        type: "p",
        value: "None"
      },
      { type: "newline" },
      {
        type: "h2",
        value: "Command arguments"
      },
      {
        type: "arguments",
        value: [
          {
            argument: "--name",
            alias: "-n",
            description: "The name of the workspace.",
            require: true,
            value: "string",
          }
        ]
      },
      { type: "newline" },
      {
        type: "h2",
        value: "Example"
      },
      {
        type: "command",
        value: "repox generate workspace --name=my-workspace"
      },
      {
        type: "p",
        value: "or"
      },
      {
        type: "command",
        value: "repox g w -n=my-workspace"
      },
      { type: "newline" },
      {
        type: "h2",
        value: "Note"
      },
      {
        type: "p",
        value: "Ensure that the workspace name is unique and adheres to file system naming conventions."
      }
    ]
  };
}
