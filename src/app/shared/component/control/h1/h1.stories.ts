import {Meta, StoryObj} from "@storybook/angular";

import {H1Component} from "./h1.component";

const meta: Meta<H1Component> = {
  title: "h1",
  component: H1Component,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<H1Component>;

export const Default: Story = {
  args: {
    value: "Title"
  }
};
