import { Component } from "@angular/core";
import {MainFeaturesModel} from "../../model/main-features.model";
import {faCodeBranch, faDiagramProject, faGaugeHigh} from "@fortawesome/free-solid-svg-icons";
import {TeamModel} from "../../model/team.model";

@Component({
  selector: "repox-website-team",
  templateUrl: "./team.component.html",
  styleUrls: ["./team.component.css"]
})
export class TeamComponent {
  readonly teams: TeamModel[] = [
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Bill_Gates_2017_%28cropped%29.jpg",
      name: "Jakub Olejarczyk"
    }
  ];
}
