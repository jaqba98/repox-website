import {Component, Input} from "@angular/core";

@Component({
  selector: "rw-arguments-smart",
  template: "<rw-arguments-dumb [value]='value'></rw-arguments-dumb>"
})
export class ArgumentsSmartComponent {
  @Input() value: {
    argument: string,
    alias: string,
    description: string,
    require: boolean,
    value: string
  }[] = [];
}
