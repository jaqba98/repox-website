export interface NpmDataModel {
  "dist-tags": {
    latest: string;
  }
}

export interface NpmDownloadsModel {
  downloads: Array<{ downloads: number; day: string }>;
}
