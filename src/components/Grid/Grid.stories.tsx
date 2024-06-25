import type { Meta, StoryObj } from '@storybook/react';

import { Grid } from './Grid';
import { Paper } from '../Paper';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Grid> = {
  title: 'Design System/Grid',
  component: Grid,
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
} satisfies Meta<typeof Grid>;

export default meta;

function DefaultRender(args: Story['args']) {
  return (
    <Grid spacing={1} {...args}>
      <Grid.Row>
        <Grid.Col xs={12}>
          <Paper variant='outlined'>xs=12</Paper>
        </Grid.Col>
        <Grid.Col xs={12} sm={4}>
          <Paper variant='outlined'>xs=12 sm=4</Paper>
        </Grid.Col>
        <Grid.Col xs={12} sm={8}>
          <Paper variant='outlined'>xs=12 sm=8</Paper>
        </Grid.Col>
      </Grid.Row>
      <Grid.Row>
        <Grid.Col xs={12} sm={6} md={4} lg={3}>
          <Paper variant='outlined'>xs=12 sm=6 md=4 lg=3</Paper>
        </Grid.Col>
        <Grid.Col xs={12} sm={6} md={4} lg={3}>
          <Paper variant='outlined'>xs=12 sm=6 md=4 lg=3</Paper>
        </Grid.Col>
        <Grid.Col xs={12} sm={6} md={4} lg={3}>
          <Paper variant='outlined'>xs=12 sm=6 md=4 lg=3</Paper>
        </Grid.Col>
        <Grid.Col xs={12} sm={6} md={12} lg={3}>
          <Paper variant='outlined'>xs=12 sm=6 md=4 lg=3</Paper>
        </Grid.Col>

        <Grid.Col xs={12} sm={8}>
          <Paper variant='outlined'>xs=12 sm=8</Paper>
        </Grid.Col>
      </Grid.Row>
    </Grid>
  );
}

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    spacing: 1,
  },
  render: DefaultRender,
};
