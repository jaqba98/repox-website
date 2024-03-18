import { Component } from '@angular/core';
import {DocsContentFormModel} from "@shared";

@Component({
  selector: 'repox-website-api-home',
  templateUrl: './api-home.component.html',
  styleUrl: './api-home.component.scss'
})
export class ApiHomeComponent {
  content: DocsContentFormModel = {
    // title: "Api",
    sections: []
  };
}
