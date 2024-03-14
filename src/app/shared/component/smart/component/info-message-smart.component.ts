import {Component, Input} from "@angular/core";
import {Message} from "primeng/api";

@Component({
  selector: "rw-info-message-smart",
  template: "<rw-info-message-dumb [messages]='buildMessages()'></rw-info-message-dumb>"
})
export class InfoMessageSmartComponent {
  @Input()
  messages: string[] = [];

  buildMessages(): Message[] {
    return this.messages.map(message => ({ severity: "info", detail: message }))
  }
}
