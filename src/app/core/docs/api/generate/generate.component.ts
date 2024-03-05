import {Component} from '@angular/core';

import {DocsContentModel} from "../../../../shared/component/docs-content/docs-content.model";

@Component({
  selector: 'repox-website-generate',
  templateUrl: './generate.component.html',
  styleUrl: './generate.component.scss'
})
export class GenerateComponent {
  content: DocsContentModel = {
    sections: [
      {
        type: "header",
        header: "Generate"
      },
      {
        type: "header",
        header: "Generate Workspace"
      },
      {
        type: "message",
        header: "Description",
        message: "The generate workspace command allows you to create a new workspace within a monorepo project managed by Repox."
      },
      {
        type: "header",
        header: "Example"
      },
      {
        type: "command",
        command: "repox generate workspace --name=myworkspace"
      },
      {
        type: "command",
        command: "repox g w -n=myworkspace"
      },
      {
        type: "header",
        header: "Arguments"
      },
      {
        type: "array",
        value: [
          {
            id: '1000',
            argument: '--name',
            alias: '-n',
            description: 'This argument defines the name of the workspace.',
            require: 'yes',
            value: 'String',
          }
        ]
      }
    ]
  };
}
