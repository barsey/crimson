import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from './IconButton';
import { Icon } from '../Icons';
import { faSmile } from '@fortawesome/free-regular-svg-icons';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof IconButton> = {
  title: 'Design System/IconButton',
  component: IconButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

function DefaultRender(args: Story['args']) {
  return (
    <IconButton {...args}>
      <Icon icon={faSmile} />
    </IconButton>
  );
}

export const Default: Story = {
  args: {},
  render: DefaultRender,
};
