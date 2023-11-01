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
    {link: "#", label: "Jakub Olejarczyk", newTab: true, children: []}
  ];
  readonly exploreNavListItems: NavListItemModel[] = [
    {link: "/home", label: "Home", newTab: false, children: []},
    {link: "/docs", label: "Docs", newTab: false, children: []},
    {link: "/support", label: "Support", newTab: false, children: []},
    {link: "/blog", label: "Blog", newTab: false, children: []}
  ];
  readonly socialMediaNavListItems: NavListItemModel[] = [
    {link: "https://www.npmjs.com/package/repox", label: "NPM", newTab: true, children: []},
    {link: "#", label: "GitHub", newTab: true, children: []},
    {link: "#", label: "Discord", newTab: true, children: []},
  ];

  readonly footerClass: string = "docs-nav";

  readonly copyright: string = "Copyright © 2023 Jakub Olejarczyk";
}
