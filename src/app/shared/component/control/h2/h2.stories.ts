import {Meta, StoryObj} from "@storybook/angular";

import {H2Component} from "./h2.component";

const meta: Meta<H2Component> = {
  title: "h2",
  component: H2Component,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<H2Component>;

export const Default: Story = {
  args: {
    value: "Title"
  }
};
