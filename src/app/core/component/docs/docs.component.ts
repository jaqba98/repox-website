import {Component} from "@angular/core";

import {NavListItemModel} from "../../../shared/model/nav-list-item.model";

@Component({
  selector: "repox-website-docs",
  templateUrl: "./docs.component.html",
  styleUrls: ["./docs.component.css"]
})
export class DocsComponent {
  readonly docsNavTitle: string = "Documentation";

  readonly docsNavListItems: NavListItemModel[] = [
    {
      link: "example1",
      label: "Example 1",
      newTab: false,
      children: [
        { link: "#", label: "Example 1.1", newTab: false },
        { link: "#", label: "Example 1.2", newTab: false },
        { link: "#", label: "Example 1.3", newTab: false },
        { link: "#", label: "Example 1.4", newTab: false },
        { link: "#", label: "Example 1.5", newTab: false }
      ]
    },
    { link: "example2", label: "Example 2", newTab: false, children: [] }
  ];

  readonly docsClass: string = "docs-nav";
}
