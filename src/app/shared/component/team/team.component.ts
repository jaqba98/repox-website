import { Component } from "@angular/core";
import {MainFeaturesModel} from "../../model/main-features.model";
import {faCodeBranch, faDiagramProject, faGaugeHigh} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "repox-website-team",
  templateUrl: "./team.component.html",
  styleUrls: ["./team.component.css"]
})
export class TeamComponent {
  readonly teams: MainFeaturesModel[] = [
    {
      title: "Speed",
      icon: faGaugeHigh,
      description: "With our tool, increase the efficiency of designing, programming and deploying your projects."
    },
    {
      title: "Single Responsibility",
      icon: faDiagramProject,
      description: "With single responsibility, you can achieve more maintainable code that is easy to develop."
    },
    {
      title: "Many projects",
      icon: faCodeBranch,
      description: "Store all your projects in one git repository and reuse code between all your applications."
    }
  ];
}
