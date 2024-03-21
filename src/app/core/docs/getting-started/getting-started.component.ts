import {Component, OnInit} from "@angular/core";

import {AsideNavService} from "@shared";

@Component({
  selector: "rw-getting-started",
  template: "<router-outlet></router-outlet>",
})
export class GettingStartedComponent implements OnInit {
  constructor(private readonly asideNav: AsideNavService) {
  }

  ngOnInit() {
    this.asideNav.asideNavOptions$.next([
      {
        key: "0-0",
        label: "Introduction",
        data: "/docs/getting-started/"
      },
      {
        key: "0-1",
        label: "Installation",
        data: "/docs/getting-started/installation"
      },
      {
        key: "0-2",
        label: "Try it",
        data: "/docs/getting-started/try-it"
      }
    ]);
  }
}
