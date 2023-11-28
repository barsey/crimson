import type { Meta, StoryObj } from '@storybook/react';

import { Tooltip } from './Tooltip';
import React, { PropsWithChildren, useState } from 'react';
import { Button } from '../Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Tooltip> = {
  title: 'Design System/Tooltip',
  component: Tooltip,
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
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

function Container({ children }: PropsWithChildren) {
  return <div style={{ margin: 20 }}>{children}</div>;
}

function Render() {
  return (
    <div>
      <Container>
        <h2>Tooltip on Button</h2>
        <Tooltip title='This is Button content of tooltip'>
          <Button disableElevation variant='outlined'>
            Trigger Element
          </Button>
        </Tooltip>
      </Container>

      <Container>
        <h2>Tooltip on span</h2>
        <Tooltip title='This is span content of tooltip'>
          <span style={{ padding: '4px 8px', border: '1px solid #ddd' }}>
            Trigger Span
          </span>
        </Tooltip>
      </Container>
      <Container>
        <h2>Tooltip on div</h2>
        <Tooltip title='This is div content of tooltip'>
          <div style={{ padding: '4px 8px', border: '1px solid #ddd' }}>
            Trigger Span
          </div>
        </Tooltip>
      </Container>
    </div>
  );
}

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {},
  render: Render,
};
