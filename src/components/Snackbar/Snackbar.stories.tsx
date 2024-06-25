import type { Meta, StoryObj } from '@storybook/react';

import { useSnackbar } from './useSnackbar';
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
  gap: 8px;
`;

function DefaultRender() {
  const { enqueueSnackbar } = useSnackbar();
  return (
    <ButtonContainer>
      <Button
        variant='filled'
        onClick={() => enqueueSnackbar('Display Default content')}
      >
        Default
      </Button>
      <Button
        variant='filled'
        color='success'
        onClick={() =>
          enqueueSnackbar({
            variant: 'success',
            message: 'Display success content',
          })
        }
      >
        Success
      </Button>
      <Button
        variant='filled'
        color='info'
        onClick={() =>
          enqueueSnackbar({
            variant: 'info',
            message: 'Display success content',
          })
        }
      >
        Info
      </Button>
      <Button
        variant='filled'
        color='warning'
        onClick={() =>
          enqueueSnackbar({
            variant: 'warning',
            message: 'Display success content',
          })
        }
      >
        Warning
      </Button>
      <Button
        variant='filled'
        color='error'
        onClick={() =>
          enqueueSnackbar({
            variant: 'error',
            message: 'Display success content',
          })
        }
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
