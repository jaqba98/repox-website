import {Component, Input} from "@angular/core";
import {MenuItem} from "primeng/api";

@Component({
  selector: "rw-breadcrumb-dump",
  templateUrl: "./breadcrumb-dumb.component.html",
  styleUrl: "./breadcrumb-dumb.component.scss"
})
export class BreadcrumbDumbComponent {
  @Input()
  items: MenuItem[] = [];

  @Input()
  home: MenuItem = {};
}
