import {Component, Input} from "@angular/core";
import {NavOptionModel} from "../../model/nav-option.model";

@Component({
  selector: "repox-website-top-nav",
  templateUrl: "./top-nav.component.html",
  styleUrls: ["./top-nav.component.css"]
})
export class TopNavComponent {
  @Input()
  topNavTitle: string = "";

  @Input()
  topNavListItems: NavOptionModel[] = [];
}
