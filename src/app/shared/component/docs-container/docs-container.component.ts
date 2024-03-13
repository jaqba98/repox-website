import {Component, Input} from '@angular/core';
import {DocsContentModel} from "@shared";


@Component({
  selector: 'repox-website-docs-container',
  templateUrl: './docs-container.component.html',
  styleUrl: './docs-container.component.scss'
})
export class DocsContainerComponent {
  @Input() content: DocsContentModel | undefined;
}
