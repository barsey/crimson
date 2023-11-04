import type { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';

import { Switch } from './Switch';
import React from 'react';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Switch> = {
  title: 'Design System/Switch',
  component: Switch,
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
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

function Render(args) {
  const [{ checked }, updateArgs] = useArgs();

  function onChange() {
    updateArgs({ checked: !checked });
  }
  return <Switch {...args} onToggle={onChange} checked={checked} />;
}

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    label: 'Switch',
    checked: true,
  },
  render: Render,
};

export const Primary: Story = {
  args: {
    color: 'primary',
    label: 'Switch',
    checked: true,
  },
  render: Render,
};

export const Secondary: Story = {
  args: {
    label: 'Switch',
    color: 'secondary',
    checked: true,
  },
  render: Render,
};

export const Success: Story = {
  args: {
    label: 'Switch',
    color: 'success',
    checked: true,
  },
  render: Render,
};

export const Error: Story = {
  args: {
    label: 'Switch',
    color: 'error',
    checked: true,
  },
  render: Render,
};

export const Warning: Story = {
  args: {
    label: 'Switch',
    color: 'warning',
    checked: true,
  },
  render: Render,
};
export const Info: Story = {
  args: {
    label: 'Switch',
    color: 'info',
    checked: true,
  },
  render: Render,
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Switch',
    checked: true,
  },
  render: Render,
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Switch',
    checked: true,
  },
  render: Render,
};
