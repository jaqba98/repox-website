import {Component, OnInit} from "@angular/core";
import {StatisticsModel} from "../../model/statistics.model";
import {FetchApiDataService} from "../../services/fetch-api-data.service";
import {NpmDataModel, NpmDownloadsModel} from "../../model/npm-data.model";

@Component({
  selector: "repox-website-statistics",
  templateUrl: "./statistics.component.html",
  styleUrls: ["./statistics.component.css"]
})
export class StatisticsComponent implements OnInit {
  statistics: StatisticsModel[] = [];

  constructor(private readonly fetchApiData: FetchApiDataService) {
    this.statistics = this.getDefaultStatistics();
  }

  private getDefaultStatistics(): StatisticsModel[] {
    return [
      {value: "0", description: "current version"},
      {value: "0", description: "last month npm downloads"},
      {value: "0", description: "total npm downloads"}
    ];
  }

  async ngOnInit(): Promise<void> {
    const npmData: NpmDataModel = await this.fetchApiData
      .fetch("https://registry.npmjs.org/repox");
    const weekNpmDownloads: NpmDownloadsModel = await this.fetchApiData
      .fetch("https://api.npmjs.org/downloads/range/last-month/repox");
    const totalNpmDownloads: NpmDownloadsModel = await this.fetchApiData
      .fetch("https://api.npmjs.org/downloads/range/2000-01-01:2100-01-01/repox");
    this.statistics[0].value = npmData["dist-tags"].latest;
    this.statistics[1].value = weekNpmDownloads.downloads.reduce((acc, curr): number => {
      acc = acc + curr.downloads;
      return acc;
    }, 0).toString();
    this.statistics[2].value = totalNpmDownloads.downloads.reduce((acc, curr): number => {
      acc = acc + curr.downloads;
      return acc;
    }, 0).toString();
  }
}
