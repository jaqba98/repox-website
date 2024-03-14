import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
  selector: "rw-header-dumb",
  templateUrl: "./header-dumb.component.html",
  styleUrl: "./header-dumb.component.scss"
})
export class HeaderDumbComponent {
  @Input()
  headerType: "h1" | "h2" = "h1";

  @Input()
  headerValue: string = "";

  @Input()
  headerLink: string = "";

  @Input()
  isHovered: boolean = false;

  @Output()
  event = new EventEmitter();

  onClick() {
    this.event.emit();
  }
}
