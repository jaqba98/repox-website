import {Component, OnInit} from '@angular/core';

import {AsideNavService} from "../../../shared/component/aside-nav/aside-nav.service";

@Component({
  selector: 'repox-website-plugins',
  templateUrl: './plugins.component.html',
  styleUrl: './plugins.component.scss'
})
export class PluginsComponent implements OnInit {
  title = "plugins";

  constructor(private readonly asideNav: AsideNavService) {
  }

  ngOnInit() {
    this.asideNav.asideNavOptions$.next([
      {key: "0-0", label: "Plugins Option 0"},
      {key: "0-1", label: "Plugins Option 1"},
      {key: "0-2", label: "Plugins Option 2"},
      {key: "0-3", label: "Plugins Option 3"},
      {key: "0-4", label: "Plugins Option 4"}
    ]);
  }
}
