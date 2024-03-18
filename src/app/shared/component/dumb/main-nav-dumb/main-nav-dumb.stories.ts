import { Meta, StoryObj, moduleMetadata } from "@storybook/angular";

import { MenubarModule } from "primeng/menubar";

import { MainNavDumbComponent } from "./main-nav-dumb.component";
import { ButtonModule } from "primeng/button";

const meta: Meta<MainNavDumbComponent> = {
    title: "Shared/Component/Dumb/MainNavDumbComponent",
    component: MainNavDumbComponent,
    tags: ["autodocs"],
    decorators: [
      moduleMetadata({
        imports: [
            MenubarModule,
            ButtonModule
        ]
      })
    ]
};
export default meta;

type Story = StoryObj<MainNavDumbComponent>;

export const Default: Story = {
  args: {
    menuItems: [
        {
            label: "Test 1",
            routerLink: "/test_1"
        },
        {
            label: "Test 2",
            routerLink: "/test_2"
        },
        {
            label: "Test 3",
            routerLink: "/test_3"
        },
        {
            label: "Test 4",
            routerLink: "/test_4"
        },
        {
            label: "Test 5",
            routerLink: "/test_5"
        }
    ]
  }
};
