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
      {key: "0", label: "Features Option 0"},
      {key: "1", label: "Features Option 1"},
      {key: "2", label: "Features Option 2"},
      {key: "3", label: "Features Option 3"},
      {key: "4", label: "Features Option 4"}
    ]);
  }
}
