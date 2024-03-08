import {Component, Input} from '@angular/core';

@Component({
  selector: 'repox-website-arguments',
  templateUrl: './arguments.component.html',
  styleUrl: './arguments.component.scss'
})
export class ArgumentsComponent {
  @Input() values: { argument: string, alias: string, description: string, require: boolean, value: string }[] = [];
}
