import {Component, HostListener} from '@angular/core';

import {AsideNavService} from "./aside-nav.service";
import {TreeNode} from "primeng/api";

@Component({
  selector: 'repox-website-aside-nav',
  templateUrl: './aside-nav.component.html',
  styleUrl: './aside-nav.component.scss'
})
export class AsideNavComponent {
  options: TreeNode[] = [];

  constructor(private readonly asideNav: AsideNavService) {
    this.asideNav.asideNavOptions$.subscribe(() => {
      this.getOptions();
    });
  }

  @HostListener("window:resize")
  getTreeOptions(): void {
    this.getOptions();
  }

  private getOptions(): void {
    if (window.innerWidth > 768) {
      this.options = this.asideNav.asideNavOptions$.getValue();
      return;
    }
    this.options = [
      {
        key: "0",
        label: "Menu",
        children: this.asideNav.asideNavOptions$.getValue()
      }
    ];
  }
}
