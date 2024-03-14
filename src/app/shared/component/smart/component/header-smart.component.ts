import {Component, HostListener, Input} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: "rw-header-smart",
  template: `<rw-header-dumb
    [headerType]='headerType'
    [headerValue]='headerValue'
    [headerLink]='headerLink'
    [isHovered]="isHovered"
    (event)="onClick()"
  ></rw-header-dumb>`
})
export class HeaderSmartComponent {
  @Input()
  headerType: "h1" | "h2" = "h1";

  @Input()
  headerValue: string = "";

  @Input()
  headerLink: string = "";

  isHovered: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute) {
    setTimeout(() => this.goToFragmentInstant(), 1);
  }

  @HostListener("mouseenter")
  onMouseEnter() {
    this.isHovered = true;
  }

  @HostListener("mouseleave")
  onMouseLeave() {
    this.isHovered = false;
  }

  onClick() {
    this.router.navigate([], {fragment: this.headerLink, relativeTo: this.route});
    this.goToFragmentInstant();
  }

  private goToFragmentInstant() {
    const currentFragment = this.router.url.split("#")[1];
    const element = document.getElementById(currentFragment);
    if (element) {
      element.scrollIntoView({behavior: "smooth"});
    }
  }
}
