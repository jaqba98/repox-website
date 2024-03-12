import {RouterTestingModule} from "@angular/router/testing";
import {Meta, moduleMetadata, StoryObj} from "@storybook/angular";
import {BreadcrumbModule} from "primeng/breadcrumb";

import {BreadcrumbDumbComponent} from "./breadcrumb-dumb.component";

const meta: Meta<BreadcrumbDumbComponent> = {
  title: "Shared/Component/Dumb/BreadcrumbDumbComponent",
  component: BreadcrumbDumbComponent,
  tags: ["autodocs"],
  decorators: [
    moduleMetadata({
      imports: [
        BreadcrumbModule,
        RouterTestingModule
      ]
    })
  ]
};
export default meta;

type Story = StoryObj<BreadcrumbDumbComponent>;

export const Default: Story = {
  args: {
    home: {icon: "pi pi-home", routerLink: "/"},
    items: [
      {label: "Link_1", routerLink: "/"},
      {label: "Link_2", routerLink: "/"},
      {label: "Link_3", routerLink: "/"},
      {label: "Link_4", routerLink: "/"},
      {label: "Link_5", routerLink: "/"},
      {label: "Link_6", routerLink: "/"}
    ]
  }
}
