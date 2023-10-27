import {Component, Input} from "@angular/core";
import {NavListItemModel} from "../../model/nav-list-item.model";

@Component({
  selector: "repox-website-docs-nav",
  templateUrl: "./docs-nav.component.html",
  styleUrls: ["./docs-nav.component.css"]
})
export class DocsNavComponent {
  @Input() navOptions: NavListItemModel[] = [];
}
