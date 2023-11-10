import {Injectable} from "@angular/core";

@Injectable({providedIn: "root"})
export class FetchApiDataService {
  async fetch(url: string) {
    const res = await fetch(url);
    return await res.json();
  }
}
