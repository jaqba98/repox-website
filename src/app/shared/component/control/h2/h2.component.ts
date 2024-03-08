import {Component, Input} from '@angular/core';

@Component({
  selector: 'repox-website-h2',
  templateUrl: './h2.component.html',
  styleUrl: './h2.component.scss'
})
export class H2Component {
  @Input() value?: string;
}
