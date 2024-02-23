import {Component, OnInit} from '@angular/core';

import {AsideNavService} from "../../../shared/component/aside-nav/aside-nav.service";

@Component({
  selector: 'repox-website-extension',
  templateUrl: './extension.component.html',
  styleUrl: './extension.component.scss'
})
export class ExtensionComponent implements OnInit {
  title = "extension";

  constructor(private readonly asideNav: AsideNavService) {
  }

  ngOnInit() {
    this.asideNav.asideNavOptions$.next([
      {key: "0-0", label: "Extension Option 0"},
      {key: "0-1", label: "Extension Option 1"},
      {key: "0-2", label: "Extension Option 2"},
      {key: "0-3", label: "Extension Option 3"},
      {key: "0-4", label: "Extension Option 4"}
    ]);
  }
}
