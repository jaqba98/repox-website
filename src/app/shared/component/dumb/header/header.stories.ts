import {Meta, StoryObj} from "@storybook/angular";

import {HeaderComponent} from "./header.component";

const meta: Meta<HeaderComponent> = {
  title: "Shared/Component/Dumb/HeaderComponent",
  component: HeaderComponent,
  tags: ["autodocs"]
};
export default meta;

type Story = StoryObj<HeaderComponent>;

export const Default = {
  args: {}
};
