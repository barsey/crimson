import type { Meta, StoryObj } from '@storybook/react';

import { Calendar } from './Calendar';
import { useState } from 'react';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Calendar> = {
  title: 'Design System/Calendar',
  component: Calendar,
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
} satisfies Meta<typeof Calendar>;

export default meta;

type Story = StoryObj<typeof meta>;

function DefaultRender(args: Story['args']) {
  const [calendarView, setCalendarView] = useState(new Date());
  const [value, setValue] = useState(new Date());

  const handleDaySelect = (selectedDate: Date) => {
    setValue(selectedDate);
  };

  const onYearChangeHandler = (year: number) => {
    const newView = new Date(year, calendarView.getMonth());

    setCalendarView(newView);
  };

  const onMonthChangeHandler = (month: number) => {
    const newView = new Date(calendarView.getFullYear(), month);

    setCalendarView(newView);
  };

  //   useEffect(() => {
  //     if (value && moment.isDate(value)) {
  //       setDisplayVal(moment(value).format('DD-MM-YYYY'));
  //       setCalendarView(value);
  //     }
  //   }, [value]);
  return (
    <Calendar
      //   minDate={minDate}
      //   maxDate={maxDate}
      {...args}
      selected={value}
      view={calendarView}
      onSelect={handleDaySelect}
      onYearChange={onYearChangeHandler}
      onMonthChange={onMonthChangeHandler}
    />
  );
}

export const Default: Story = {
  args: {},
  render: DefaultRender,
};
