import {Component} from "@angular/core";
import {PersonsModel} from "../../models/persons.model";

@Component({
  selector: "repox-website-team",
  templateUrl: "./team.component.html",
  styleUrls: ["./team.component.css"]
})
export class TeamComponent {
  persons: PersonsModel[] = [
    {
      avatar: "https://ournationalheroes.com/wp-content/uploads/2022/10/0x0.jpg",
      name: "Jakub Olejarczyk",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere efficitur hendrerit. Fusce dictum, mauris nec ultricies faucibus, lorem mi feugiat magna, id varius risus mi ac arcu. Donec aliquam at lectus at iaculis.",
      socialMedias: [
        { label: "Website", link: "#" },
        { label: "LinkedIn", link: "#" },
        { label: "Github", link: "#" }
      ]
    }
  ];
}
