import { Component } from '@angular/core';
import {DocsContentModel} from "../../../../shared/component/form/docs-content/docs-content.model";

@Component({
  selector: 'repox-website-api-home',
  templateUrl: './api-home.component.html',
  styleUrl: './api-home.component.scss'
})
export class ApiHomeComponent {
  content: DocsContentModel = {
    // title: "Api",
    sections: []
  };
}
