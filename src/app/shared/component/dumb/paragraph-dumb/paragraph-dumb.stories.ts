import {Meta, StoryObj} from "@storybook/angular";

import {ParagraphDumbComponent} from "./paragraph-dumb.component";

const meta: Meta<ParagraphDumbComponent> = {
  title: "Shared/Component/Dumb/ParagraphDumbComponent",
  component: ParagraphDumbComponent,
  tags: ["autodocs"]
};
export default meta;

type Story = StoryObj<ParagraphDumbComponent>;

export const Default: Story = {
  args: {
    value: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur nulla non diam vehicula tristique. Suspendisse pulvinar facilisis diam et pharetra. Phasellus nisl elit, eleifend sagittis sagittis at, congue vitae leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec tincidunt nibh turpis, non fringilla purus interdum eget. Phasellus dolor arcu, rhoncus quis vulputate aliquam, lobortis a mi. In malesuada velit ac massa pharetra, non fermentum justo pharetra. Suspendisse tincidunt consequat mauris vel mattis. Nam et massa pretium, sodales augue vel, egestas diam. Duis massa lectus, pulvinar non mauris ut, aliquam convallis nisi. Sed a ipsum tristique, faucibus ex in, suscipit tellus. Curabitur euismod magna lectus, eu accumsan ante fringilla eget. In hac habitasse platea dictumst. Quisque fringilla lobortis dolor eget blandit. Sed consectetur enim a ante interdum mattis. "
  }
};
