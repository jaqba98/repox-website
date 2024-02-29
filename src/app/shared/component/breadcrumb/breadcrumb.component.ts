import {Component} from '@angular/core';
import {MenuItem} from "primeng/api";
import {Router} from "@angular/router";

@Component({
  selector: 'repox-website-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent {
  items: MenuItem[] | undefined;

  home: MenuItem | undefined;

  constructor(private readonly router: Router) {
    const routerUrl = this.getRouterUrl();
    this.items = routerUrl.map(url => ({label: url.currentPart, routerLink: url.currentHref}));
    this.home = {icon: 'pi pi-home', routerLink: '/'};
  }

  private getRouterUrl(): { currentPart: string, currentHref: string }[] {
    const urlParts = this.router.url
      .split("/")
      .filter((_, index) => index !== 0);
    return urlParts.map((currentPart, index) => ({
      currentPart: this.getCurrentPath(currentPart),
      currentHref: this.getCurrentHref(urlParts, index)
    }));
  }

  private getCurrentPath(currentPart: string): string {
    return currentPart.charAt(0).toUpperCase() + currentPart.slice(1).toLowerCase();
  }

  private getCurrentHref(urlParts: string[], index: number): string {
    return "/".concat(urlParts.slice(0, index + 1).join("/"));
  }
}
