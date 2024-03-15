import {Component, Input} from "@angular/core";

@Component({
  selector: "rw-paragraph-smart",
  template: "<rw-paragraph-smart [value]='value'></rw-paragraph-smart>"
})
export class ParagraphSmartComponent {
  @Input()
  value: string = "";
}
