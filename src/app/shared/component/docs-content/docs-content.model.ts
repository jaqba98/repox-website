export interface DocsContentSectionModel {
  title: string;
  message: string;
}

export interface DocsContentModel {
  title: string;
  sections: DocsContentSectionModel[];
}
