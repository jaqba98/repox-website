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
      {key: "0", label: "Plugins Option 0"},
      {key: "1", label: "Plugins Option 1"},
      {key: "2", label: "Plugins Option 2"},
      {key: "3", label: "Plugins Option 3"},
      {key: "4", label: "Plugins Option 4"}
    ]);
  }
}
