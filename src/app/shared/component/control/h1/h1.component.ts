import {Component, Input} from '@angular/core';

@Component({
  selector: 'repox-website-h1',
  templateUrl: './h1.component.html',
  styleUrl: './h1.component.scss'
})
export class H1Component {
  @Input() value?: string;
}
