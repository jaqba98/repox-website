import {Component} from "@angular/core";
import {MainFeaturesModel} from "../../models/main-features.model";

@Component({
  selector: "repox-website-main-features",
  templateUrl: "./main-features.component.html",
  styleUrls: ["./main-features.component.css"]
})
export class MainFeaturesComponent {
  features: MainFeaturesModel[] = [
    {
      title: "Title 2",
      img: {
        url: "https://cdn-icons-png.flaticon.com/512/3439/3439971.png",
        alt: "Computer"
      },
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus posuere justo sit amet purus scelerisque, et imperdiet augue fringilla. Maecenas commodo elit in placerat tempor."
    },
    {
      title: "Title 2",
      img: {
        url: "https://cdn-icons-png.flaticon.com/512/3439/3439971.png",
        alt: "Computer"
      },
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus posuere justo sit amet purus scelerisque, et imperdiet augue fringilla. Maecenas commodo elit in placerat tempor."
    },
    {
      title: "Title 2",
      img: {
        url: "https://cdn-icons-png.flaticon.com/512/3439/3439971.png",
        alt: "Computer"
      },
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus posuere justo sit amet purus scelerisque, et imperdiet augue fringilla. Maecenas commodo elit in placerat tempor."
    }
  ];
}
