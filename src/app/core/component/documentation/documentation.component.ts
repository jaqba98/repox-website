import {Component} from "@angular/core";
import {NavListItemModel} from "../../../shared/model/nav-list-item.model";

@Component({
  selector: "repox-website-documentation",
  templateUrl: "./documentation.component.html",
  styleUrls: ["./documentation.component.css"]
})
export class DocumentationComponent {
  readonly documentationNavTitle: string = "Documentation";

  readonly documentationNavListItems: NavListItemModel[] = [
    {
      link: "getting-started",
      label: "Getting Started",
      newTab: false,
      children: []
    },
    {
      link: "installation",
      label: "Installation",
      newTab: false,
      children: []
    },
    {
      link: "generate",
      label: "Generate",
      newTab: false,
      children: [
        {
          link: "generate/workspace",
          label: "Generate Workspace",
          newTab: false
        },
        {
          link: "generate/project",
          label: "Generate Project",
          newTab: false
        }
      ]
    },
    {
      link: "regenerate",
      label: "Regenerate",
      newTab: false,
      children: [
        {
          link: "regenerate/workspace",
          label: "Regenerate Workspace",
          newTab: false
        }
      ]
    },
    {
      link: "build",
      label: "Build",
      newTab: false,
      children: [
        {
          link: "build/project",
          label: "Build Project",
          newTab: false
        }
      ]
    },
    {
      link: "lint",
      label: "Lint",
      newTab: false,
      children: [
        {
          link: "lint/project",
          label: "Lint Project",
          newTab: false
        }
      ]
    }
  ];

  readonly documentationClass: string = "documentation-nav";
}
