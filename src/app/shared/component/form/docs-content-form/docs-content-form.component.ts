import {Component, Input} from '@angular/core';

import {DocsContentFormModel} from "./docs-content-form.model";

@Component({
  selector: "rw-docs-content-form",
  templateUrl: "./docs-content-form.component.html",
  styleUrl: "./docs-content-form.component.scss"
})
export class DocsContentFormComponent {
  @Input() content: DocsContentFormModel | undefined;
}
