import {Component} from '@angular/core';
import {AsideNavService} from "./aside-nav.service";
import {TreeNode} from "primeng/api";

@Component({
  selector: 'repox-website-aside-nav',
  templateUrl: './aside-nav.component.html',
  styleUrl: './aside-nav.component.scss'
})
export class AsideNavComponent {
  treeOptions: TreeNode[] = [];

  constructor(private readonly asideNav: AsideNavService) {
    this.asideNav.asideNavOptions$.subscribe(asideNavOptions => {
      this.treeOptions = asideNavOptions;
    });
  }
}
