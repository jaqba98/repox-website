import {Component, Input} from "@angular/core";

@Component({
  selector: "rw-terminal-dumb",
  templateUrl: "./terminal-dumb.component.html",
  styleUrl: "./terminal-dumb.component.scss"
})
export class TerminalDumbComponent {
  @Input()
  content: string = "";
}
