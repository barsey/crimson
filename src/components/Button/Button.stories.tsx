import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Button> = {
  title: 'Design System/Button',
  component: Button,
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
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Default: Story = {
  args: {
    children: 'Button',
  },
};

export const Primary: Story = {
  args: {
    color: 'primary',
    children: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    color: 'secondary',
    children: 'Button',
  },
};

export const Success: Story = {
  args: {
    color: 'success',
    children: 'Button',
  },
};

export const Info: Story = {
  args: {
    color: 'info',
    children: 'Button',
  },
};

export const Warning: Story = {
  args: {
    color: 'warning',
    children: 'Button',
  },
};

export const Error: Story = {
  args: {
    color: 'error',
    children: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    children: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    children: 'Button',
  },
};
