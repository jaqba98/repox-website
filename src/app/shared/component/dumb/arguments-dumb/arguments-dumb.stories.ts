import {Meta, moduleMetadata, StoryObj} from "@storybook/angular";
import {TableModule} from "primeng/table";

import {ArgumentsDumbComponent} from "./arguments-dumb.component";

const meta: Meta<ArgumentsDumbComponent> = {
  title: "Shared/Component/Dumb/ArgumentsDumbComponent",
  component: ArgumentsDumbComponent,
  tags: ["autodocs"],
  decorators: [
    moduleMetadata({
      imports: [
        TableModule
      ]
    })
  ]
};
export default meta;

type Story = StoryObj<ArgumentsDumbComponent>;

export const Default: Story = {
  args: {
    value: [
      {
        argument: "name",
        alias: "n",
        description: "The name of the workspace.",
        require: true,
        value: "string"
      }
    ]
  }
}
