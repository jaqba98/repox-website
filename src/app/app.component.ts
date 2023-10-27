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
    { link: "/home", label: "Home" },
    { link: "/docs", label: "Docs" },
    { link: "/support", label: "Support" },
    { link: "/blog", label: "Blog" }
  ];
}
