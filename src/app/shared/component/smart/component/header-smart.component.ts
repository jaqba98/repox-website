import {Component, Input} from "@angular/core";

@Component({
  selector: "rw-header-smart",
  template: `<rw-header-dumb
    [headerType]='headerType'
    [headerValue]='headerValue'
    [headerLink]='headerLink'
  ></rw-header-dumb>`
})
export class HeaderSmartComponent {
  @Input()
  headerType: "h1" | "h2" = "h1";

  @Input()
  headerValue: string = "";

  @Input()
  headerLink: string = "";
}
