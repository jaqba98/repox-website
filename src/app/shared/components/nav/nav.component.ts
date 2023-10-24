import {Component, ElementRef} from "@angular/core";
import {NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs";

@Component({
  selector: "repox-website-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent {
  openLink: string = "";

  links: Array<{ name: string; href: string; }> = [
    {name: "Home", href: "/home"},
    {name: "Documentation", href: "/documentation"},
    {name: "Blog", href: "/blog"},
    {name: "Donation", href: "/donation"}
  ];

  menuIsOpen: boolean = false;

  constructor(
    private readonly router: Router,
    private readonly el: ElementRef
  ) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => this.openLink = event.url === "/" ? "/home" : event.url);
  }

  toggleMenu(): void {
    this.menuIsOpen = !this.menuIsOpen;
  }

  linkIsOpen(href: string): boolean {
    return this.openLink === href;
  }

  closeMobileMenu(): void {
    this.menuIsOpen = false;
  }
}
