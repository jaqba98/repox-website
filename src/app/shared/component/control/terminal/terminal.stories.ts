import {Meta, StoryObj} from "@storybook/angular";

import {TerminalComponent} from "./terminal.component";

const meta: Meta<TerminalComponent> = {
  title: "Terminal",
  component: TerminalComponent,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<TerminalComponent>;

export const Default: Story = {
  args: {
    command: "repox generate workspace"
  }
};
