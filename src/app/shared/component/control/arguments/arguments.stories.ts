import {Meta, StoryObj} from "@storybook/angular";
import {ArgumentsComponent} from "./arguments.component";

const meta: Meta<ArgumentsComponent> = {
  title: "arguments",
  component: ArgumentsComponent,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<ArgumentsComponent>;

export const Default: Story = {
  args: {
    values: [
      {
        argument: "--name",
        alias: "-n",
        description: "Defines the name of the workspace. It specifies the folder name that will be created on the disk.",
        require: true,
        value: "string"
      }
    ]
  }
};
