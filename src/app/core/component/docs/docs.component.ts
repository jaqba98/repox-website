import {Component} from "@angular/core";

import {NavListItemModel} from "../../../shared/model/nav-list-item.model";

@Component({
  selector: "repox-website-docs",
  templateUrl: "./docs.component.html",
  styleUrls: ["./docs.component.css"]
})
export class DocsComponent {
  readonly docsNavTitle: string = "";

  readonly docsNavListItems: NavListItemModel[] = [
    { link: "example1", label: "Example 1" },
    { link: "example2", label: "Example 2" }
  ];
}
