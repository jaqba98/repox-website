import {Component, Input} from "@angular/core";
import {NavOptionModel} from "../../model/nav-option.model";

@Component({
  selector: "repox-website-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent {
  @Input() navOptions: NavOptionModel[] = [];
}
