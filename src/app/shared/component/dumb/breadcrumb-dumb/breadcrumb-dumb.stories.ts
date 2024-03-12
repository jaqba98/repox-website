import {Meta, moduleMetadata, StoryObj} from "@storybook/angular";
import {BreadcrumbDumbComponent} from "./breadcrumb-dumb.component";
import {BreadcrumbModule} from "primeng/breadcrumb";
import {ActivatedRoute} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";

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
    home: {icon: 'pi pi-home', routerLink: '/'},
    items: [
      {label: "aaaaaaaaa"},
      {label: "bbbbbbbbb"},
      {label: "ccccccccc"},
      {label: "ddddddddd"}
    ]
  }
}
