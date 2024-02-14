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
      },
      {
        label: "Docs",
        items: [
          {
            label: "Getting started"
          },
          {
            label: "Features"
          },
          {
            label: "Concepts"
          },
          {
            label: "Extension"
          },
          {
            label: "Plugins"
          },
          {
            label: "API"
          },
          {
            label: "Changelog"
          }
        ]
      },
      {
        label: "Blog"
      },
      {
        label: "Community"
      },
      {
        label: "Plugins registry"
      },
      {
        label: "Sponsors"
      }
    ];
  }
}
