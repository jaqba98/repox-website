import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {TreeNode} from "primeng/api";

@Injectable({
  providedIn: 'root'
})
export class AsideNavService {
  asideNavOptions$ = new BehaviorSubject<TreeNode[]>([]);
}
