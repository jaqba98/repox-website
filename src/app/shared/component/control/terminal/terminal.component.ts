import {Component, Input} from '@angular/core';
import {MessageService} from "primeng/api";

@Component({
  selector: 'repox-website-terminal',
  templateUrl: './terminal.component.html',
  styleUrl: './terminal.component.scss',
  providers: [MessageService]
})
export class TerminalComponent {
  @Input() command?: string;

  constructor(private messageService: MessageService) {
  }

  onClick() {
    navigator.clipboard.writeText(this.command ?? "");
    this.messageService.add({severity: "info", detail: "Copied"});
  }
}
