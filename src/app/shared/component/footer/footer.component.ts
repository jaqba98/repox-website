import {Component} from "@angular/core";
import {NavListItemModel} from "../../model/nav-list-item.model";

@Component({
  selector: "repox-website-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})
export class FooterComponent {
  readonly docsNavTitle: string = "Documentation";

  readonly docsNavListItems: NavListItemModel[] = [
    {link: "example1", label: "Example 1", children: []},
    {link: "example2", label: "Example 2", children: []},
    {link: "example3", label: "Example 3", children: []},
    {link: "example4", label: "Example 4", children: []},
    {link: "example5", label: "Example 5", children: []}
  ];

  readonly docsClass: string = "docs-nav";
}
