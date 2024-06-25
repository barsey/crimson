import type { Meta, StoryObj } from '@storybook/react';

import { Box } from './Box';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Box> = {
  title: 'Design System/Box',
  component: Box,
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
} satisfies Meta<typeof Box>;

export default meta;

type Story = StoryObj<typeof meta>;

function DefaultRender(args: Story['args']) {
  return (
    <Box
      display='flex'
      flexDirection='column'
      gap={10}
      border='0.5px solid grey'
      padding={10}
    >
      <Box as='section' padding={10} background={'lightgrey'}>
        This is a html section rendered through the Box and is not using the
        passed props. The below boxes are using the passed props.
      </Box>
      <Box {...args} backgroundColor='orange'>
        This Box overrides children and backgroundColor
      </Box>
      <Box {...args} />
    </Box>
  );
}

export const Default: Story = {
  args: {
    children: 'This Box has default content',
    as: 'div',
    backgroundColor: 'blue',
    fontSize: 24,
    color: 'white',
    padding: 10,
    className: 'custom-class',
    borderRadius: 4,
  },
  render: DefaultRender,
};
