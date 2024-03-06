import { Component } from '@angular/core';
import {DocsContentModel} from "../../../../../shared/component/docs-content/docs-content.model";

@Component({
  selector: 'repox-website-generate-home',
  templateUrl: './generate-home.component.html',
  styleUrl: './generate-home.component.scss'
})
export class GenerateHomeComponent {
  content: DocsContentModel = {
    sections: [
      {
        type: "h1",
        value: "Generate"
      }
    ]
  };
}
