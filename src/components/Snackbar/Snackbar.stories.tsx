import type { Meta, StoryObj } from '@storybook/react';

import { useSnackbar } from './useSnackbar';
import React from 'react';
import styled from '@emotion/styled';
import { Button } from '../Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof useSnackbar> = {
  title: 'Design System/Snackbar',
  //   component: Button,
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
} satisfies Meta<typeof useSnackbar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

function DefaultRender() {
  const { enqueueSnackbar } = useSnackbar();
  return (
    <ButtonContainer>
      <Button
        variant='contained'
        onClick={() => enqueueSnackbar('Display Default content')}
        disableElevation
      >
        Default
      </Button>
      <Button
        variant='contained'
        color='success'
        onClick={() =>
          enqueueSnackbar({
            variant: 'success',
            message: 'Display success content',
          })
        }
        disableElevation
      >
        Success
      </Button>
      <Button
        variant='contained'
        color='info'
        onClick={() =>
          enqueueSnackbar({
            variant: 'info',
            message: 'Display success content',
          })
        }
        disableElevation
      >
        Info
      </Button>
      <Button
        variant='contained'
        color='warning'
        onClick={() =>
          enqueueSnackbar({
            variant: 'warning',
            message: 'Display success content',
          })
        }
        disableElevation
      >
        Warning
      </Button>
      <Button
        variant='contained'
        color='error'
        onClick={() =>
          enqueueSnackbar({
            variant: 'error',
            message: 'Display success content',
          })
        }
        disableElevation
      >
        Error
      </Button>
    </ButtonContainer>
  );
}

export const Default: Story = {
  args: {
    children: 'Button',
  },
  render: DefaultRender,
};
