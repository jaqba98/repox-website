import {Meta, StoryObj} from "@storybook/angular";

import {HeaderDumbComponent} from "./header-dumb.component";

const meta: Meta<HeaderDumbComponent> = {
  title: "Shared/Component/Dumb/HeaderDumbComponent",
  component: HeaderDumbComponent,
  tags: ["autodocs"]
};
export default meta;

type Story = StoryObj<HeaderDumbComponent>;

export const Default: Story = {
  args: {
    headerType: "h1",
    headerValue: "Title",
    headerLink: "title"
  }
};
