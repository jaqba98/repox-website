import {Component, Input} from "@angular/core";
import {MenuItem} from "primeng/api";

@Component({
  selector: "rw-main-nav-dumb",
  templateUrl: "./main-nav-dumb.component.html",
  styleUrls: ["./main-nav-dumb.component.scss"]
})
export class MainNavDumbComponent {
  @Input()
  menuItems: MenuItem[] = [];
}
