import {Component, OnInit} from '@angular/core';

import {AsideNavService} from "../../../shared/component/aside-nav/aside-nav.service";

@Component({
  selector: 'repox-website-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrl: './getting-started.component.scss'
})
export class GettingStartedComponent implements OnInit {
  title = "getting-started";

  constructor(private readonly asideNav: AsideNavService) {
  }

  ngOnInit() {
    this.asideNav.asideNavOptions$.next([
      {key: "0", label: "GettingStarted Option 0"},
      {key: "1", label: "GettingStarted Option 1"},
      {key: "2", label: "GettingStarted Option 2"},
      {key: "3", label: "GettingStarted Option 3"},
      {key: "4", label: "GettingStarted Option 4"}
    ]);
  }
}
