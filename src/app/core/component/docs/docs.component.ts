import {Component} from "@angular/core";
import {NavOptionModel} from "../../../shared/model/nav-option.model";

@Component({
  selector: "repox-website-docs",
  templateUrl: "./docs.component.html",
  styleUrls: ["./docs.component.css"]
})
export class DocsComponent {
  docsNavOptions: NavOptionModel[] = [
    { link: "example1", label: "Example 1" },
    { link: "example2", label: "Example 2" }
  ];
}
