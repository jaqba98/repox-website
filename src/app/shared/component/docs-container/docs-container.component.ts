import {Component, Input} from '@angular/core';

import {DocsContentModel} from "../docs-content/docs-content.model";

@Component({
  selector: 'repox-website-docs-container',
  templateUrl: './docs-container.component.html',
  styleUrl: './docs-container.component.scss'
})
export class DocsContainerComponent {
  @Input() content: DocsContentModel | undefined;
}
