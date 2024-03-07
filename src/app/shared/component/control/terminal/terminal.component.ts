import {Component, Input} from '@angular/core';

@Component({
  selector: 'repox-website-terminal',
  templateUrl: './terminal.component.html',
  styleUrl: './terminal.component.scss'
})
export class TerminalComponent {
  @Input() command: string = "";
}
