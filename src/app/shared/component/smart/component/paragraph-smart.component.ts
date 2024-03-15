import {Component, Input} from "@angular/core";

@Component({
  selector: "rw-paragraph-smart",
  template: "<rw-paragraph-dumb [value]='value'></rw-paragraph-dumb>"
})
export class ParagraphSmartComponent {
  @Input()
  value: string = "";
}
