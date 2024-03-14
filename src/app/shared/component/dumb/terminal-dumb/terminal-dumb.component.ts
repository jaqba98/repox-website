import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
  selector: "rw-terminal-dumb",
  templateUrl: "./terminal-dumb.component.html",
  styleUrl: "./terminal-dumb.component.scss"
})
export class TerminalDumbComponent {
  @Input()
  content: string = "";

  @Output()
  event = new EventEmitter();

  onClick() {
    this.event.emit();
  }
}
