import {IconDefinition} from "@fortawesome/free-brands-svg-icons";

export interface NavListItemModel {
  link: string;
  label: string;
  newTab: boolean;
  icon?: IconDefinition;
  children: Array<Pick<NavListItemModel, "link" | "label" | "newTab" | "icon">>;
}
