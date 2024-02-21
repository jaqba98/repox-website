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
            routerLink: "docs/getting-started"
          },
          {
            label: "Features",
            routerLink: "docs/features"
          },
          {
            label: "Concepts",
            routerLink: "docs/concepts"
          },
          {
            label: "Extension",
            routerLink: "docs/extension"
          },
          {
            label: "Plugins",
            routerLink: "docs/plugins"
          },
          {
            label: "API",
            routerLink: "docs/api"
          },
          {
            label: "Changelog",
            routerLink: "docs/changelog"
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
