import {Component} from "@angular/core";
import {MainFeaturesModel} from "../../models/main-features.model";

@Component({
  selector: "repox-website-main-features",
  templateUrl: "./main-features.component.html",
  styleUrls: ["./main-features.component.css"]
})
export class MainFeaturesComponent {
  readonly features: MainFeaturesModel[] = [
    {
      title: "Reusability",
      icon: "rebase",
      description: "Create the code once and use it in all your products."
    },
    {
      title: "Automated",
      icon: "precision_manufacturing",
      description: "Automate the process of building, testing and publishing your products."
    },
    {
      title: "Scalability",
      icon: "monitoring",
      description: "Successively increase the complexity of your products in a simple way."
    }
  ];
}
