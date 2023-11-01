export interface NavListItemModel {
  link: string;
  label: string;
  newTab: boolean;
  children: Array<Pick<NavListItemModel, "link" | "label" | "newTab">>;
}
