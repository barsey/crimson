import type { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { RangeSlider } from './RangeSlider';
import { Box } from '../Box';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof RangeSlider> = {
  title: 'Design System/RangeSlider',
  component: RangeSlider,
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
} satisfies Meta<typeof RangeSlider>;

export default meta;

type Story = StoryObj<typeof meta>;

function DefaultRender(args: Story['args']) {
  const [{ min, max, value }, updateArgs] = useArgs();

  const onChange = (changedValue: number) => {
    updateArgs({ value: changedValue });
  };

  return (
    <Box width='100%'>
      <RangeSlider
        min={min}
        max={max}
        value={value}
        {...args}
        onChange={onChange}
      />
    </Box>
  );
}

export const Default: Story = {
  args: {
    min: 0,
    max: 200,
    value: 100,
    step: 10,
    label: 'Range Slider',
  },
  render: DefaultRender,
};
