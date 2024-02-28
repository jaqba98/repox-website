import {Component, Input} from '@angular/core';

@Component({
  selector: 'repox-website-docs-content',
  templateUrl: './docs-content.component.html',
  styleUrl: './docs-content.component.scss'
})
export class DocsContentComponent {
  @Input() title: string;

  constructor() {
    this.title = "";
  }
}
