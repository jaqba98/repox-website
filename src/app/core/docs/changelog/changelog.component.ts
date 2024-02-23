import {Component, OnInit} from '@angular/core';

import {AsideNavService} from "../../../shared/component/aside-nav/aside-nav.service";

@Component({
  selector: 'repox-website-changelog',
  templateUrl: './changelog.component.html',
  styleUrl: './changelog.component.scss'
})
export class ChangelogComponent implements OnInit {
  title = "changelog";

  constructor(private readonly asideNav: AsideNavService) {
  }

  ngOnInit() {
    this.asideNav.asideNavOptions$.next([
      {key: "0-0", label: "Changelog Option 0"},
      {key: "0-1", label: "Changelog Option 1"},
      {key: "0-2", label: "Changelog Option 2"},
      {key: "0-3", label: "Changelog Option 3"},
      {key: "0-4", label: "Changelog Option 4"}
    ]);
  }
}
