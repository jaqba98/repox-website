import { Component } from "@angular/core";
import { TeamModel } from "../../model/team.model";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: "repox-website-team",
  templateUrl: "./team.component.html",
  styleUrls: ["./team.component.css"]
})
export class TeamComponent {
  readonly teams: TeamModel[] = [
    {
      image: "assets/images/person.jpg",
      name: "Jakub Olejarczyk",
      navListItems: [
        {
          link: "https://www.linkedin.com/in/jakub-olejarczyk",
          label: "Linkedin",
          newTab: true,
          icon: faLinkedin,
          children: []
        },
        {
          link: "https://github.com/jaqba98",
          label: "GitHub",
          newTab: true,
          icon: faGithub,
          children: []
        }
      ]
    }
  ];
}
