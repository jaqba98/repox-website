import {Component, Input} from '@angular/core';

import {DocsContentModel} from "@shared";

@Component({
  selector: 'repox-website-docs-content',
  templateUrl: './docs-content.component.html',
  styleUrl: './docs-content.component.scss'
})
export class DocsContentComponent {
  @Input() content: DocsContentModel | undefined;
}
