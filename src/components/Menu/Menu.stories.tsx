import type { Meta, StoryObj } from '@storybook/react';
// import { useArgs } from '@storybook/preview-api';

import { Menu } from './Menu';
import { MenuItem } from './MenuItem';
import React from 'react';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Menu> = {
  title: 'Design System/Menu',
  component: Menu,
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
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

function Render() {
  return (
    <Menu label='Edit'>
      <MenuItem label='Undo' onClick={() => console.log('Undo')} />
      <MenuItem label='Redo' disabled />
      <MenuItem label='Cut' />
    </Menu>
  );
}

function NestedRender() {
  return (
    <Menu label='Edit'>
      <MenuItem label='Undo' onClick={() => console.log('Undo')} />
      <MenuItem label='Redo' disabled />

      <MenuItem label='Cut' />
      <Menu label='Copy as'>
        <MenuItem label='Text' />
        <MenuItem label='Video' />
        <Menu label='Image'>
          <MenuItem label='.png' />
          <MenuItem label='.jpg' />
          <MenuItem label='.svg' />
          <MenuItem label='.gif' />
        </Menu>
        <MenuItem label='Audio' />
      </Menu>
      <Menu label='Share'>
        <MenuItem label='Mail' />
        <MenuItem label='Instagram' />
      </Menu>
    </Menu>
  );
}

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    // fullWidth: false,
  },
  render: Render,
};

export const Nested: Story = {
  args: {
    // color: 'primary',
  },
  render: NestedRender,
};
