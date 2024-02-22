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
      {key: "0", label: "Extension Option 0"},
      {key: "1", label: "Extension Option 1"},
      {key: "2", label: "Extension Option 2"},
      {key: "3", label: "Extension Option 3"},
      {key: "4", label: "Extension Option 4"}
    ]);
  }
}
