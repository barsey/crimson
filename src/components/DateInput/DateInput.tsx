import { faCalendarDay } from '@fortawesome/free-solid-svg-icons';
import { Icon } from '../Icons';
import { Popover, PopoverContent, PopoverTrigger } from '../Popover';

import { useState } from 'react';
import { Calendar } from '../Calendar/Calendar';
import styled from '@emotion/styled';
import { ParticleSize } from '../types';
import { ParticleHeights } from '../constants';
import DateUtilities from '../Calendar/DateUtilities';

const Container = styled.div<{ inputsize?: ParticleSize }>`
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
  box-shadow: ${({ theme }) => theme.shadow.main};
  display: flex;
  height: ${({ inputsize = 'medium' }) => ParticleHeights[inputsize]}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.25rem;
  flex-shrink: 0;
  border-radius: 0.25rem;
  border: ${({ theme }) => `1px solid ${theme.colors.grey[400]}`};
  background: ${({ theme }) => theme.colors.neutral[0]};
  transition: border-color 0.3s ease;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: normal;

  min-width: 200px;
  &:focus {
    border-color: ${({ theme }) => theme.colors.grey[900]};
    outline: none;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.grey[700]};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.grey[100]};
    color: ${({ theme }) => theme.colors.grey[500]};
    border-color: ${({ theme }) => theme.colors.grey[400]};
    outline: none;
  }

  &.error {
    border-color: ${({ theme }) => theme.colors.error[500]};
  }
`;
const PlaceHolderContainer = styled.span`
  opacity: 0.5;
`;
export type DateInputProps = {
  value?: Date;
  onChange?: (date?: Date) => void;
  minDate?: Date;
  maxDate?: Date;
  id?: string;
};
function DateInput({
  value,
  onChange,
  minDate,
  maxDate,
  id = 'date-input',
}: DateInputProps) {
  const [open, setOpen] = useState(false);
  const [calendarView, setCalendarView] = useState<Date>(value ?? new Date());

  const handleDaySelect = (selectedDate: Date) => {
    onChange && onChange(selectedDate);
    setCalendarView(selectedDate);
    setOpen(false);
  };

  const onYearChangeHandler = (year: number) => {
    const newView = new Date(year, calendarView.getMonth());

    setCalendarView(newView);
  };

  const onMonthChangeHandler = (month: number) => {
    const newView = new Date(calendarView.getFullYear(), month);

    setCalendarView(newView);
  };

  return (
    <Popover open={open} onOpenChange={setOpen} placement='bottom-end'>
      <PopoverTrigger onClick={() => setOpen((v) => !v)} asChild>
        <Container id={`${id}-trigger`} data-testid={`${id}-trigger`}>
          {!value ? (
            <PlaceHolderContainer>MM/DD/YYYY</PlaceHolderContainer>
          ) : (
            DateUtilities.toString(value)
          )}
          <Icon icon={faCalendarDay} />
        </Container>
      </PopoverTrigger>
      <PopoverContent id={`${id}-content`}>
        <Calendar
          minDate={minDate}
          maxDate={maxDate}
          selected={value}
          view={calendarView}
          onSelect={handleDaySelect}
          onYearChange={onYearChangeHandler}
          onMonthChange={onMonthChangeHandler}
          hasBorder={false}
          id={`${id}-content-calendar`}
        />
      </PopoverContent>
    </Popover>
  );
}

export { DateInput };
