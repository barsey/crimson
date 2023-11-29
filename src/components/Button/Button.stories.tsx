import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';
import React from 'react';
import styled from '@emotion/styled';

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

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

function DefaultRender() {
  return (
    <ButtonContainer>
      <Button>Default</Button>
      <Button color='secondary'>Secondary</Button>
      <Button color='info'>Info</Button>
      <Button color='success'>Success</Button>
      <Button color='error'>Error</Button>
    </ButtonContainer>
  );
}

function ContainedRender() {
  return (
    <ButtonContainer>
      <Button variant='contained'>Default</Button>
      <Button variant='contained' color='secondary'>
        Secondary
      </Button>
      <Button variant='contained' color='info'>
        Info
      </Button>
      <Button variant='contained' color='success'>
        Success
      </Button>
      <Button variant='contained' color='error'>
        Error
      </Button>
    </ButtonContainer>
  );
}

function OutlinedRender() {
  return (
    <ButtonContainer>
      <Button variant='outlined'>Default</Button>
      <Button variant='outlined' color='secondary'>
        Secondary
      </Button>
      <Button variant='outlined' color='info'>
        Info
      </Button>
      <Button variant='outlined' color='success'>
        Success
      </Button>
      <Button variant='outlined' color='error'>
        Error
      </Button>
    </ButtonContainer>
  );
}

function SizesRender() {
  return (
    <>
      <ButtonContainer>
        <Button size='small'>Small</Button>
        <Button size='medium'>Medium</Button>
        <Button size='large'>Large</Button>
      </ButtonContainer>
      <ButtonContainer>
        <Button variant='contained' size='small'>
          Small
        </Button>
        <Button variant='contained' size='medium'>
          Medium
        </Button>
        <Button variant='contained' size='large'>
          Large
        </Button>
      </ButtonContainer>
      <ButtonContainer>
        <Button variant='outlined' size='small'>
          Small
        </Button>
        <Button variant='outlined' size='medium'>
          Medium
        </Button>
        <Button variant='outlined' size='large'>
          Large
        </Button>
      </ButtonContainer>
      <ButtonContainer>
        <Button variant='gradient' size='small'>
          Small
        </Button>
        <Button variant='gradient' size='medium'>
          Medium
        </Button>
        <Button variant='gradient' size='large'>
          Large
        </Button>
      </ButtonContainer>
    </>
  );
}

export const Default: Story = {
  args: {
    children: 'Button',
  },
  render: DefaultRender,
};

export const Containted: Story = {
  args: {
    color: 'primary',
    children: 'Button',
    variant: 'contained',
  },
  render: ContainedRender,
};

export const Outlined: Story = {
  args: {
    color: 'primary',
    children: 'Button',
    variant: 'contained',
  },
  render: OutlinedRender,
};

export const WithGradient: Story = {
  args: {
    color: 'primary',
    children: 'Button',
    variant: 'gradient',
  },
};

export const Sizes: Story = {
  args: {
    color: 'secondary',
    children: 'Button',
  },
  render: SizesRender,
};
