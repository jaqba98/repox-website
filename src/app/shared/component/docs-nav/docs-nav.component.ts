import {Component, Input} from "@angular/core";
import {NavOptionModel} from "../../model/nav-option.model";

@Component({
  selector: "repox-website-docs-nav",
  templateUrl: "./docs-nav.component.html",
  styleUrls: ["./docs-nav.component.css"]
})
export class DocsNavComponent {
  @Input() navOptions: NavOptionModel[] = [];
}
