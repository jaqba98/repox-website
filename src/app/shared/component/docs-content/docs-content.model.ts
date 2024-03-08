export interface DocsContentH1SectionModel {
  type: "h1";
  value: string;
}

export interface DocsContentH2SectionModel {
  type: "h2";
  value: string;
}

export interface DocsContentPSectionModel {
  type: "p";
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
  | DocsContentH1SectionModel
  | DocsContentH2SectionModel
  | DocsContentPSectionModel
  | DocsContentCommandSectionModel
  | DocsContentArraySectionModel
  | DocsContentNewlineSectionModel;

export interface DocsContentModel {
  sections: DocsContentSectionModel[];
}
