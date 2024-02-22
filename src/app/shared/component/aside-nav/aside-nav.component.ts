import {Component} from '@angular/core';

import {AsideNavService} from "./aside-nav.service";

@Component({
  selector: 'repox-website-aside-nav',
  templateUrl: './aside-nav.component.html',
  styleUrl: './aside-nav.component.scss'
})
export class AsideNavComponent {
  constructor(private readonly asideNav: AsideNavService) {
    this.asideNav.asideNavOptions$.subscribe();
  }

  getTreeOptions() {
    return this.asideNav.asideNavOptions$.getValue();
  }
}
