import {Component, OnInit} from "@angular/core";

@Component({
  selector: "repox-website-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent {
  links: Array<{ name: string; href: string; }> = [
    { name: "Home", href: "/home" },
    { name: "Documentation", href: "/documentation" },
    { name: "Blog", href: "/blog" },
    { name: "Team", href: "/team" },
    { name: "Donation", href: "/donation" }
  ];
}
