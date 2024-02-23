import {Component, OnInit} from '@angular/core';

import {AsideNavService} from "../../../shared/component/aside-nav/aside-nav.service";

@Component({
  selector: 'repox-website-concepts',
  templateUrl: './concepts.component.html',
  styleUrl: './concepts.component.scss'
})
export class ConceptsComponent implements OnInit {
  title = "concepts";

  constructor(private readonly asideNav: AsideNavService) {
  }

  ngOnInit() {
    this.asideNav.asideNavOptions$.next([
      {key: "0-0", label: "Concepts Option 0"},
      {key: "0-1", label: "Concepts Option 1"},
      {key: "0-2", label: "Concepts Option 2"},
      {key: "0-3", label: "Concepts Option 3"},
      {key: "0-4", label: "Concepts Option 4"}
    ]);
  }
}
