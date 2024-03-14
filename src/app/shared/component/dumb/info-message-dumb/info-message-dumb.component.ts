import {Component, Input} from "@angular/core";
import {Message} from "primeng/api";

@Component({
  selector: "rw-info-message-dumb",
  templateUrl: "./info-message-dumb.component.html",
  styleUrl: "./info-message-dumb.component.scss"
})
export class InfoMessageDumbComponent {
  @Input()
  messages: Message[] = [];
}
