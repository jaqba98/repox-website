import {Injectable} from "@angular/core";

@Injectable({providedIn: "root"})
export class GetNpmDataService {
  async get(name: string) {
    const res = await fetch(name);
    return await res.json();
  }
}
