import {Component} from "@angular/core";
import {MainFeaturesModel} from "../../model/main-features.model";
import {faCodeBranch, faDiagramProject, faGaugeHigh} from "@fortawesome/free-solid-svg-icons";
import {StatisticsModel} from "../../model/statistics.model";

@Component({
  selector: "repox-website-statistics",
  templateUrl: "./statistics.component.html",
  styleUrls: ["./statistics.component.css"]
})
export class StatisticsComponent {
  readonly statistics: StatisticsModel[] = [
    {
      downloads: "1.4.15",
      description: "current version"
    },
    {
      downloads: "25",
      description: "daily npm downloads"
    },
    {
      downloads: "1500",
      description: "monthly npm downloads"
    }
  ];
}
