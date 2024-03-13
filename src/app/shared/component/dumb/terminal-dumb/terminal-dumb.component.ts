import {Component, Input} from "@angular/core";
import {MessageService} from "primeng/api";

@Component({
  selector: "rw-terminal-dumb",
  templateUrl: "./terminal-dumb.component.html",
  styleUrl: "./terminal-dumb.component.scss"
})
export class TerminalDumbComponent {
  @Input()
  content: string = "";

  constructor(private messageService: MessageService) {
  }

  copy() {
    navigator.clipboard.writeText(this.content);
    this.messageService.add({severity: "info", detail: "Copied"});
  }
}
