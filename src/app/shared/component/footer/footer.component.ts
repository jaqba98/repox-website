import {Component} from "@angular/core";
import {NavListItemModel} from "../../model/nav-list-item.model";

@Component({
  selector: "repox-website-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})
export class FooterComponent {
  readonly teamNavTitle: string = "Team";
  readonly exploreMediaNavTitle: string = "Explore";
  readonly socialMediaNavTitle: string = "Social Media";

  readonly teamNavListItems: NavListItemModel[] = [
    {link: "#", label: "Jakub Olejarczyk", children: []}
  ];
  readonly exploreNavListItems: NavListItemModel[] = [
    {link: "/home", label: "Home", children: []},
    {link: "/docs", label: "Docs", children: []},
    {link: "/support", label: "Support", children: []},
    {link: "/blog", label: "Blog", children: []}
  ];
  readonly socialMediaNavListItems: NavListItemModel[] = [
    {link: "#", label: "NPM", children: []},
    {link: "#", label: "GitHub", children: []},
    {link: "#", label: "Discord", children: []},
  ];

  readonly footerClass: string = "docs-nav";

  readonly copyright: string = "Copyright © 2023 Jakub Olejarczyk";
}
