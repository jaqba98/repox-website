import {Meta, StoryObj} from "@storybook/angular";

import {ParagraphComponent} from "./paragraph.component";

const meta: Meta<ParagraphComponent> = {
  title: "Paragraph",
  component: ParagraphComponent,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<ParagraphComponent>;

export const Default: Story = {
  args: {
    value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dictum condimentum iaculis. Quisque scelerisque eget quam at iaculis. Proin eget leo ex. In finibus sed lorem id semper. Nunc commodo, massa sed tempus pellentesque, enim massa placerat lorem, ac pretium odio arcu at purus. Donec fringilla lectus et nisi fringilla, eget porta velit aliquet. Aenean ac condimentum risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus tempor mauris nisl, vitae pretium massa ultrices at. Etiam commodo mauris eu lorem rhoncus tempor. Sed ac ante dictum, accumsan est id, accumsan ligula. Duis sed velit tortor. Nam dignissim, purus et elementum consectetur, turpis ipsum hendrerit dui, a eleifend metus nibh eget dui. Nulla facilisi. Morbi ornare ultricies libero, condimentum auctor mauris hendrerit id. Fusce elementum leo non vestibulum posuere. "
  }
};
