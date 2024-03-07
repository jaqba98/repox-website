import {Component, Input} from '@angular/core';
import {MessageService} from "primeng/api";

@Component({
  selector: 'repox-website-terminal',
  templateUrl: './terminal.component.html',
  styleUrl: './terminal.component.scss',
  providers: [MessageService]
})
export class TerminalComponent {
  @Input() command: string = "";

  constructor(private messageService: MessageService) {
  }

  onClick(command: string) {
    navigator.clipboard.writeText(command);
    this.messageService.add({severity: "info", detail: "Copied"});
  }
}
