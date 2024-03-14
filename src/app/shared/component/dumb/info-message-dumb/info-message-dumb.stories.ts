import {Meta, moduleMetadata, StoryObj} from "@storybook/angular";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MessagesModule} from "primeng/messages";

import {InfoMessageDumbComponent} from "./info-message-dumb.component";

const meta: Meta<InfoMessageDumbComponent> = {
  title: "Shared/Component/Dumb/ErrorMessageDumbComponent",
  component: InfoMessageDumbComponent,
  tags: ["autodocs"],
  decorators: [
    moduleMetadata({
      imports: [
        BrowserAnimationsModule,
        MessagesModule
      ]
    })
  ]
};
export default meta;

type Story = StoryObj<InfoMessageDumbComponent>;

export const Default: Story = {
  args: {
    messages: [
      { severity: "info", summary: "Info", detail: "Message Content" }
    ]
  }
};
