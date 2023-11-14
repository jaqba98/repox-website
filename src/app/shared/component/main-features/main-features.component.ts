import {Component} from "@angular/core";
import {faCodeBranch, faDiagramProject, faGaugeHigh} from "@fortawesome/free-solid-svg-icons";
import {MainFeaturesModel} from "../../model/main-features.model";

@Component({
  selector: "repox-website-main-features",
  templateUrl: "./main-features.component.html",
  styleUrls: ["./main-features.component.css"]
})
export class MainFeaturesComponent {
  readonly mainFeatures: MainFeaturesModel[] = [
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
