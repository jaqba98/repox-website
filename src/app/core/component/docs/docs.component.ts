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
      children: [
        { link: "#", label: "Example 1.1" },
        { link: "#", label: "Example 1.2" },
        { link: "#", label: "Example 1.3" },
        { link: "#", label: "Example 1.4" },
        { link: "#", label: "Example 1.5" }
      ]
    },
    { link: "example2", label: "Example 2", children: [] }
  ];

  readonly docsClass: string = "docs-nav";
}
