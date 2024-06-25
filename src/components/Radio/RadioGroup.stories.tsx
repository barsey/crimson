import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup } from './RadioGroup';
import { useArgs } from '@storybook/preview-api';
import { OptionType } from '../types';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof RadioGroup> = {
  title: 'Design System/RadioGroup',
  component: RadioGroup,
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
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  { label: 'Green', value: 'green' },
  { label: 'Blue', value: 'blue' },
  { label: 'Red', value: 'red' },
  { label: 'Yellow', value: 'yellow' },
  { label: 'Orange', value: 'orange' },
  { label: 'Pink', value: 'pink' },
  { label: 'Purple', value: 'purple' },
  { label: 'Grey', value: 'grey' },
];

const AcceptReasons = [
  {
    label:
      'Stable - continue treatment plan, manage risk factors, and monitor as needed.',
    value:
      'Stable - continue treatment plan, manage risk factors, and monitor as needed.',
  },
  {
    label:
      'Improving - continue treatment plan, manage risk factors, and monitor as needed.',
    value:
      'Improving - continue treatment plan, manage risk factors, and monitor as needed.',
  },
  {
    label:
      'Worsening - appropriate treatment plan in placed, continue to monitor, maintain current meds and risk factor control.',
    value:
      'Worsening - appropriate treatment plan in placed, continue to monitor, maintain current meds and risk factor control.',
  },
];

function Render(args: Story['args']) {
  const [{ value, id, label, options }, updateArgs] = useArgs();

  const onChange = (val: OptionType['value']) => {
    updateArgs({ value: val });
  };

  return (
    <RadioGroup
      {...args}
      id={id}
      label={label}
      options={options}
      value={value}
      onChange={onChange}
    />
  );
}

export const Default: Story = {
  args: {
    id: 'default_radio',
    label: 'Select anyone',
    options,
  },
  render: Render,
};

export const LargeContent: Story = {
  args: {
    id: 'default_radio',
    label: 'Accept Reasons',
    options: AcceptReasons,
  },
  render: Render,
};
