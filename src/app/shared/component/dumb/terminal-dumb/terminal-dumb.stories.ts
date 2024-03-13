import {Meta, StoryObj} from "@storybook/angular";

import {TerminalDumbComponent} from "./terminal-dumb.component";

const meta: Meta<TerminalDumbComponent> = {
  title: "Shared/Component/Dumb/TerminalDumbComponent",
  component: TerminalDumbComponent,
  tags: ["autodocs"]
};
export default meta;

type Story = StoryObj<TerminalDumbComponent>;

export const Default: Story = {
  args: {}
};
