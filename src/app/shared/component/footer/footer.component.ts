import {Component} from "@angular/core";
import {NavListItemModel} from "../../model/nav-list-item.model";
import {faDiscord, faGithub, faLinkedin, faNpm} from "@fortawesome/free-brands-svg-icons";

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
    {
      link: "https://www.linkedin.com/in/jakub-olejarczyk",
      label: "Jakub Olejarczyk",
      newTab: true,
      icon: faLinkedin,
      children: []
    }
  ];
  readonly exploreNavListItems: NavListItemModel[] = [
    {link: "/home", label: "Home", newTab: false, children: []},
    {link: "/documentation", label: "Documentation", newTab: false, children: []}
  ];
  readonly socialMediaNavListItems: NavListItemModel[] = [
    {
      link: "https://www.npmjs.com/package/repox",
      label: "NPM",
      newTab: true,
      icon: faNpm,
      children: []
    },
    {
      link: "https://github.com/jaqba98/repox",
      label: "GitHub",
      newTab: true,
      icon: faGithub,
      children: []
    },
    {
      link: "https://discord.gg/BEWU8amS",
      label: "Discord",
      newTab: true,
      icon: faDiscord,
      children: []
    },
  ];

  readonly footerClass: string = "footer-main-nav";

  readonly copyright: string = "Copyright © 2023 Jakub Olejarczyk";
}
