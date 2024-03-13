import {Meta, moduleMetadata, StoryObj} from "@storybook/angular";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {PanelModule} from "primeng/panel";
import {ButtonModule} from "primeng/button";

import {TerminalDumbComponent} from "./terminal-dumb.component";
import {ToastModule} from "primeng/toast";
import {MessageService} from "primeng/api";

const meta: Meta<TerminalDumbComponent> = {
  title: "Shared/Component/Dumb/TerminalDumbComponent",
  component: TerminalDumbComponent,
  tags: ["autodocs"],
  decorators: [
    moduleMetadata({
      imports: [
        BrowserAnimationsModule,
        PanelModule,
        ButtonModule,
        ToastModule
      ],
      providers: [
        MessageService
      ]
    })
  ]
};
export default meta;

type Story = StoryObj<TerminalDumbComponent>;

export const Default: Story = {
  args: {
    content: "repox program --arg1 -a command --arg2 -b"
  }
};
