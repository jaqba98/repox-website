import {Component, Input} from "@angular/core";

@Component({
  selector: "rw-arguments-dumb",
  templateUrl: "./arguments-dumb.component.html",
  styleUrl: "./arguments-dumb.component.scss"
})
export class ArgumentsDumbComponent {
  @Input() value: {
    argument: string,
    alias: string,
    description: string,
    require: boolean,
    value: string
  }[] = [];
}
