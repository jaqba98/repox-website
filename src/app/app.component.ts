import {Component} from "@angular/core";

import {NavListItemModel} from "./shared/model/nav-list-item.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  readonly appNavTitle: string = "Repox";

  readonly appNavListItems: NavListItemModel[] = [
    { link: "/home", label: "Home", newTab: false, children: [] },
    { link: "/documentation", label: "Documentation", newTab: false, children: [] },
    { link: "/support", label: "Support", newTab: false, children: [] },
    { link: "/blog", label: "Blog", newTab: false, children: [] }
  ];

  readonly appClass: string = "top-nav";
}
