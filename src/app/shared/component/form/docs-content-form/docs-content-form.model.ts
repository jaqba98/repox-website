export interface DocsContentFormFirstLevelHeaderModel {
  type: "firstLevelHeader";
  value: string;
  link: string;
}

export interface DocsContentFormSecondLevelHeaderModel {
  type: "secondLevelHeader";
  value: string;
  link: string;
}

export interface DocsContentFormInfoModel {
  type: "info";
  value: string;
}

export interface DocsContentFormParagraphModel {
  type: "paragraph";
  value: string;
}

export interface DocsContentFormCommandModel {
  type: "command";
  value: string;
}

export interface DocsContentFormArgumentsModel {
  type: "arguments";
  value: { argument: string, alias: string, description: string, require: boolean, value: string }[];
}

export interface DocsContentFormNewlineModel {
  type: "newline";
}

export type DocsContentSectionModel =
  | DocsContentFormFirstLevelHeaderModel
  | DocsContentFormSecondLevelHeaderModel
  | DocsContentFormInfoModel
  | DocsContentFormParagraphModel
  | DocsContentFormCommandModel
  | DocsContentFormArgumentsModel
  | DocsContentFormNewlineModel;

export interface DocsContentFormModel {
  sections: DocsContentSectionModel[];
}
