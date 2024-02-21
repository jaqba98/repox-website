import {Component} from "@angular/core";
import {MenuItem} from "primeng/api";

@Component({
  selector: "repox-website-main-nav",
  templateUrl: "./main-nav.component.html",
  styleUrls: ["./main-nav.component.scss"]
})
export class MainNavComponent {
  menuItems: MenuItem[];

  constructor() {
    this.menuItems = [
      {
        label: "Home",
        routerLink: "/home"
      },
      {
        label: "Docs",
        routerLink: "docs",
        items: [
          {
            label: "Getting started",
            routerLink: "getting-started"
          },
          {
            label: "Features",
            routerLink: "features"
          },
          {
            label: "Concepts",
            routerLink: "concepts"
          },
          {
            label: "Extension",
            routerLink: "extension"
          },
          {
            label: "Plugins",
            routerLink: "plugins"
          },
          {
            label: "API",
            routerLink: "api"
          },
          {
            label: "Changelog",
            routerLink: "changelog"
          }
        ]
      },
      {
        label: "Blog",
        routerLink: "/blog"
      },
      {
        label: "Community",
        routerLink: "/community"
      },
      {
        label: "Plugins registry",
        routerLink: "/plugins-registry"
      },
      {
        label: "Sponsors",
        routerLink: "/sponsors"
      }
    ];
  }
}
