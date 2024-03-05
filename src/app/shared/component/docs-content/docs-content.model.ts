export interface DocsContentHeaderSectionModel {
  type: "header";
  header: string;
}

export interface DocsContentMessageSectionModel {
  type: "message";
  header: string;
  message: string;
}

export interface DocsContentCommandSectionModel {
  type: "command";
  command: string;
}

export interface DocsContentArraySectionModel {
  type: "array";
  value: any;
}

export type DocsContentSectionModel =
  | DocsContentHeaderSectionModel
  | DocsContentMessageSectionModel
  | DocsContentCommandSectionModel
  | DocsContentArraySectionModel;

export interface DocsContentModel {
  sections: DocsContentSectionModel[];
}
