import type { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { DateInput } from './DateInput';
import { add } from 'date-fns';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof DateInput> = {
  title: 'Design System/DateInput',
  component: DateInput,
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
} satisfies Meta<typeof DateInput>;

export default meta;

type Story = StoryObj<typeof meta>;

function DefaultRender(args: Story['args']) {
  const [{ value }, updateArgs] = useArgs();

  return (
    <DateInput
      {...args}
      value={value}
      onChange={(date) => {
        updateArgs({ value: date });
      }}
    />
  );
}

const currentDate = new Date();

export const Default: Story = {
  args: {
    value: currentDate,
    minDate: add(new Date(), { months: -3 }),
    maxDate: add(new Date(), { months: 3 }),
  },
  render: DefaultRender,
};
