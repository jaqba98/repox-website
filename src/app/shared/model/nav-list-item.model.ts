export interface NavListItemModel {
  link: string;
  label: string;
  children: Array<Pick<NavListItemModel, "link" | "label">>;
}
