import {Component, OnInit} from "@angular/core";
import {StatisticsModel} from "../../model/statistics.model";
import {GetNpmDataService} from "../../services/get-npm-data.service";
import {NpmDataModel, NpmDownloadsModel} from "../../model/npm-data.model";

@Component({
  selector: "repox-website-statistics",
  templateUrl: "./statistics.component.html",
  styleUrls: ["./statistics.component.css"]
})
export class StatisticsComponent implements OnInit {
  statistics: StatisticsModel[] = [
    {downloads: "0", description: "current version"},
    {downloads: "0", description: "last month npm downloads"},
    {downloads: "0", description: "total npm downloads"}
  ];

  constructor(private readonly getNpmData: GetNpmDataService) {
  }

  async ngOnInit() {
    const repox: NpmDataModel = await this.getNpmData.get("https://registry.npmjs.org/repox");
    const lastWeek: NpmDownloadsModel = await this.getNpmData.get("https://api.npmjs.org/downloads/range/last-month/repox");
    const totalWeek: NpmDownloadsModel = await this.getNpmData.get("https://api.npmjs.org/downloads/range/2000-01-01:2100-01-01/repox");
    this.statistics[0] = {downloads: repox["dist-tags"].latest, description: "current version"};
    this.statistics[1] = {
      downloads: lastWeek.downloads.reduce((acc, curr): number => {
        acc = acc + curr.downloads;
        return acc;
      }, 0).toString(),
      description: "last month npm downloads"
    };
    this.statistics[2] = {
      downloads: totalWeek.downloads.reduce((acc, curr): number => {
        acc = acc + curr.downloads;
        return acc;
      }, 0).toString(),
      description: "total npm downloads"
    };
  }
}
