import {Component, Input} from "@angular/core";

import {NavListItemModel} from "../../model/nav-list-item.model";

@Component({
  selector: "repox-website-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent {
  @Input()
  navTitle: string = "";

  @Input()
  navListItems: NavListItemModel[] = [];

  @Input()
  navClass: string = "";

  menuIsOpened: boolean = false;

  onClickHamburger(): void {
    this.menuIsOpened = !this.menuIsOpened;
  }

  onClickNavListItem(): void {
    this.menuIsOpened = false;
  }
}
