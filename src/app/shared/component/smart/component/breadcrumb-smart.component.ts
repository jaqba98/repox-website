import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {MenuItem} from "primeng/api";

interface BreadcrumbItem extends Pick<MenuItem, "label" | "routerLink"> {
}

@Component({
  selector: "rw-breadcrumb-smart",
  template: "<rw-breadcrumb-dump [items]='items' [home]='home'></rw-breadcrumb-dump>"
})
export class BreadcrumbSmartComponent {
  items: MenuItem[];

  home: MenuItem;

  constructor(private readonly router: Router) {
    this.items = this.getRouterUrl();
    this.home = {icon: "pi pi-home", routerLink: "/"};
  }

  private getRouterUrl(): BreadcrumbItem[] {
    const parts = this.getRouterUrlParts();
    return parts
      .map(part => part.split("#")[0])
      .map((part, index) => ({
        label: this.getRouterLabel(part),
        routerLink: this.getRouterLink(parts, index)
      }));
  }

  private getRouterUrlParts(): string[] {
    return this.router.url
      .split("/")
      .filter((_, index) => index > 0);
  }

  private getRouterLabel(label: string): string {
    let newLabel = label.charAt(0).toUpperCase() + label.slice(1).toLowerCase();
    newLabel = newLabel.replace(/-/gm, " ");
    return newLabel;
  }

  private getRouterLink(parts: string[], index: number): string {
    return "/".concat(parts.slice(0, index + 1).join("/"));
  }
}
