import {Component, Input} from "@angular/core";
import {MessageService} from "primeng/api";

@Component({
  selector: "rw-terminal-smart",
  template: "<rw-terminal-dumb [content]='content' (event)='copy()'></rw-terminal-dumb>"
})
export class TerminalSmartComponent {
  @Input()
  content: string = "";

  constructor(private messageService: MessageService) {
  }

  copy() {
    navigator.clipboard.writeText(this.content);
    this.messageService.add({severity: "info", detail: "Copied"});
  }
}
