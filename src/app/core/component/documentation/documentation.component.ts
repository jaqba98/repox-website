import {Component} from "@angular/core";
import {NavListItemModel} from "../../../shared/model/nav-list-item.model";

@Component({
  selector: "repox-website-documentation",
  templateUrl: "./documentation.component.html",
  styleUrls: ["./documentation.component.css"]
})
export class DocumentationComponent {
  readonly documentationNavTitle: string = "Documentation";

  readonly documentationNavListItems: NavListItemModel[] = [
    {
      link: "example1",
      label: "Example 1",
      newTab: false,
      children: [
        {link: "#", label: "Example 1.1", newTab: false},
        {link: "#", label: "Example 1.2", newTab: false},
        {link: "#", label: "Example 1.3", newTab: false},
        {link: "#", label: "Example 1.4", newTab: false},
        {link: "#", label: "Example 1.5", newTab: false}
      ]
    },
    {
      link: "example2",
      label: "Example 2",
      newTab: false,
      children: []
    }
  ];

  readonly documentationClass: string = "documentation-nav";
}
