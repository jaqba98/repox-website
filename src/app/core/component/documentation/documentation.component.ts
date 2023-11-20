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
      link: "introduction",
      label: "Introduction",
      newTab: false,
      children: []
    },
    {
      link: "installation",
      label: "Installation",
      newTab: false,
      children: []
    }
  ];

  readonly documentationClass: string = "documentation-nav";
}
