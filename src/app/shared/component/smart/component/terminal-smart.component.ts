import {Component, Input} from "@angular/core";


@Component({
  selector: "rw-terminal-smart",
  template: "<rw-terminal-dumb [content]='content'></rw-terminal-dumb>"
})
export class TerminalSmartComponent {
  @Input()
  content: string = "";
}
