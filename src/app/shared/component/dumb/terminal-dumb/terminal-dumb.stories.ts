import {Meta, moduleMetadata, StoryObj} from "@storybook/angular";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {PanelModule} from "primeng/panel";
import {ButtonModule} from "primeng/button";

import {TerminalDumbComponent} from "./terminal-dumb.component";

const meta: Meta<TerminalDumbComponent> = {
  title: "Shared/Component/Dumb/TerminalDumbComponent",
  component: TerminalDumbComponent,
  tags: ["autodocs"],
  decorators: [
    moduleMetadata({
      imports: [
        BrowserAnimationsModule,
        PanelModule,
        ButtonModule
      ]
    })
  ]
};
export default meta;

type Story = StoryObj<TerminalDumbComponent>;

export const Default: Story = {
  args: {
    header: "Terminal",
    content: "repox program --arg1 -a command --arg2 -b"
  }
};
