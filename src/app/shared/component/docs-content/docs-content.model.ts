export interface DocsContentHeaderLevel1SectionModel {
  type: "firstLevelHeader";
  value: string;
  link: string;
}

export interface DocsContentH2SectionModel {
  type: "secondLevelHeader";
  value: string;
  link: string;
}

export interface DocsContentPSectionModel {
  type: "paragraph";
  value: string;
}

export interface DocsContentCommandSectionModel {
  type: "command";
  value: string;
}

export interface DocsContentArraySectionModel {
  type: "arguments";
  value: { argument: string, alias: string, description: string, require: boolean, value: string }[];
}

export interface DocsContentNewlineSectionModel {
  type: "newline";
}

export type DocsContentSectionModel =
  | DocsContentHeaderLevel1SectionModel
  | DocsContentH2SectionModel
  | DocsContentPSectionModel
  | DocsContentCommandSectionModel
  | DocsContentArraySectionModel
  | DocsContentNewlineSectionModel;

export interface DocsContentModel {
  sections: DocsContentSectionModel[];
}
