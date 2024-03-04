import {Component, HostListener} from '@angular/core';
import {Router} from "@angular/router";
import {TreeNode} from "primeng/api";

import {AsideNavService} from "./aside-nav.service";

@Component({
  selector: 'repox-website-aside-nav',
  templateUrl: './aside-nav.component.html',
  styleUrl: './aside-nav.component.scss'
})
export class AsideNavComponent {
  options: TreeNode[] = [];

  constructor(
    private readonly asideNav: AsideNavService,
    private readonly router: Router
  ) {
    this.asideNav.asideNavOptions$.subscribe(() => {
      this.getOptions();
    });
  }

  @HostListener("window:resize")
  getTreeOptions(): void {
    this.getOptions();
  }

  onSelect(event: any) {
    this.router.navigate([event.node.data]);
    this.options.forEach((node) => this.expandRecursive(node, false));
  }

  private expandRecursive(node: TreeNode, isExpand: boolean) {
    node.expanded = isExpand;
    if (node.children) {
      node.children.forEach((childNode) => {
        this.expandRecursive(childNode, isExpand);
      });
    }
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
