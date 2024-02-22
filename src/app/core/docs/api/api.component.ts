import {Component, OnInit} from '@angular/core';

import {AsideNavService} from "../../../shared/component/aside-nav/aside-nav.service";

@Component({
  selector: 'repox-website-api',
  templateUrl: './api.component.html',
  styleUrl: './api.component.scss'
})
export class ApiComponent implements OnInit {
  title = "api";

  constructor(private readonly asideNav: AsideNavService) {
  }

  ngOnInit() {
    this.asideNav.asideNavOptions$.next([
      {key: "0", label: "Api Option 0"},
      {key: "1", label: "Api Option 1"},
      {key: "2", label: "Api Option 2"},
      {key: "3", label: "Api Option 3"},
      {key: "4", label: "Api Option 4"}
    ]);
  }
}
