import {Component} from "@angular/core";

import {MenuItem} from "primeng/api";

@Component({
  selector: "rw-main-nav-smart",
  template: "<rw-main-nav-dumb [menuItems]='menuItems'></rw-main-nav-dumb>"
})
export class MainNavSmartComponent {
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
