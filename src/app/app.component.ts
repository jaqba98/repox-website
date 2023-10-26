import {Component} from "@angular/core";
import {NavOptionModel} from "./shared/model/nav-option.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appNavOptions: NavOptionModel[] = [
    { link: "/home", label: "Home" },
    { link: "/docs", label: "Docs" },
    { link: "/support", label: "Support" },
    { link: "/blog", label: "Blog" }
  ];
}
