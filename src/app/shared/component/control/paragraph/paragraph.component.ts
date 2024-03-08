import {Component, Input} from '@angular/core';

@Component({
  selector: 'repox-website-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrl: './paragraph.component.scss'
})
export class ParagraphComponent {
  @Input() value?: string;
}
