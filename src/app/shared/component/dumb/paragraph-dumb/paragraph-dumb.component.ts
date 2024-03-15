import {Component, Input} from "@angular/core";

@Component({
  selector: "rw-paragraph-dumb",
  templateUrl: "./paragraph-dumb.component.html",
  styleUrl: "./paragraph-dumb.component.scss"
})
export class ParagraphDumbComponent {
  @Input()
  value: string = "";
}
