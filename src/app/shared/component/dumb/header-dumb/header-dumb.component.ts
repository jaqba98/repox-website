import {Component, HostListener, Input} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: "rw-header-dumb",
  templateUrl: "./header-dumb.component.html",
  styleUrl: "./header-dumb.component.scss"
})
export class HeaderDumbComponent {
  @Input()
  headerType: "h1" | "h2" = "h1";

  @Input()
  headerValue: string = "";

  @Input()
  headerLink: string = "";

  isHovered: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.goToFragment(this.headerLink);
  }

  @HostListener("mouseenter")
  onMouseEnter() {
    this.isHovered = true;
  }

  @HostListener("mouseleave")
  onMouseLeave() {
    this.isHovered = false;
  }

  onClick(fragment: string) {
    this.router.navigate([], { fragment: fragment, relativeTo: this.route });
    this.goToFragment(fragment);
  }

  private goToFragment(fragment: string) {
    const element = document.getElementById(fragment);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
