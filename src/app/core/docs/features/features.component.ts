import {Component, OnInit} from '@angular/core';

import {AsideNavService} from "../../../shared/component/aside-nav/aside-nav.service";

@Component({
  selector: 'repox-website-features',
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss'
})
export class FeaturesComponent implements OnInit {
  title = "features";

  constructor(private readonly asideNav: AsideNavService) {
  }

  ngOnInit() {
    this.asideNav.asideNavOptions$.next([
      {key: "0-0", label: "Features Option 0"},
      {key: "0-1", label: "Features Option 1"},
      {key: "0-2", label: "Features Option 2"},
      {key: "0-3", label: "Features Option 3"},
      {key: "0-4", label: "Features Option 4"}
    ]);
  }
}
