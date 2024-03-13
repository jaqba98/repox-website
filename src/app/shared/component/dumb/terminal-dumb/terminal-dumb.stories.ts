import {Meta, moduleMetadata, StoryObj} from "@storybook/angular";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {PanelModule} from "primeng/panel";

import {TerminalDumbComponent} from "./terminal-dumb.component";

const meta: Meta<TerminalDumbComponent> = {
  title: "Shared/Component/Dumb/TerminalDumbComponent",
  component: TerminalDumbComponent,
  tags: ["autodocs"],
  decorators: [
    moduleMetadata({
      imports: [
        BrowserAnimationsModule,
        PanelModule
      ]
    })
  ]
};
export default meta;

type Story = StoryObj<TerminalDumbComponent>;

export const Default: Story = {
  args: {
    header: "Header",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt " +
      "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris " +
      "nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit " +
      "esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in " +
      "culpa qui officia deserunt mollit anim id est laborum."
  }
};
