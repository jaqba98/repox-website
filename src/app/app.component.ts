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
    { link: "/home", label: "Home", children: [] },
    { link: "/docs", label: "Docs", children: [] },
    { link: "/support", label: "Support", children: [] },
    { link: "/blog", label: "Blog", children: [] }
  ];

  readonly appClass: string = "top-nav";
}
