import {Component, OnInit} from "@angular/core";

import {AsideNavService} from "@shared";

@Component({
  selector: "rw-api",
  template: "<router-outlet></router-outlet>",
})
export class ApiComponent implements OnInit {
  constructor(private readonly asideNav: AsideNavService) {
  }

  ngOnInit() {
    this.asideNav.asideNavOptions$.next([
      {
        key: "0-0",
        label: "Generate",
        data: "/docs/api/generate",
        children: [
          {key: "0-0-1", label: "Workspace", data: "/docs/api/generate/workspace"},
          {key: "0-0-2", label: "Project", data: "/docs/api/generate/project"},
        ]
      },
      {
        key: "0-1",
        label: "Regenerate",
        data: "/docs/api/regenerate",
        children: [
          {key: "0-1-1", label: "Workspace", data: "/docs/api/regenerate/workspace"},
        ]
      },
      {
        key: "0-2",
        label: "Build",
        data: "/docs/api/build",
        children: [
          {key: "0-2-1", label: "Project", data: "/docs/api/build/project"},
        ]
      },
      {
        key: "0-3",
        label: "Lint",
        data: "/docs/api/lint"
      }
    ]);
  }
}
