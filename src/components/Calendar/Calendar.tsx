import { useState, useEffect, useCallback } from 'react';
import MonthHeader from './MonthHeader';
import WeekHeader from './WeekHeader';
import Weeks from './Weeks';
import DateUtilities from './DateUtilities';
import styled from '@emotion/styled';
import { Paper } from '../Paper';

const Container = styled.div`
  display: flex;
  max-width: 300px;
  min-height: 305px;
  overflow-x: hidden;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  font-family: ${({ theme }) => theme.font.family.base};
  font-style: normal;
  line-height: normal;
`;

export type CalendarProps = {
  view: Date;
  className?: string;
  style?: React.CSSProperties;
  hasBorder?: boolean;
  selected?: Date;
  onSelect: (date: Date) => void;
  minDate?: Date;
  maxDate?: Date;
  onYearChange?: (year: number) => void;
  onMonthChange?: (month: number) => void;
  id?: string;
};

function Calendar({
  view,
  className,
  style,
  hasBorder = true,
  id = 'calendar',
  ...props
}: CalendarProps) {
  const [calendarView, setCalendarView] = useState(new Date());
  useEffect(() => {
    if (view) {
      setCalendarView(DateUtilities.clone(view));
    }
  }, [view]);

  const onMove = useCallback((view: Date) => {
    setCalendarView(view);
  }, []);

  return (
    <Container
      id={`${id}-container`}
      data-testid={`${id}-container`}
      className={className}
      style={style}
    >
      <Paper
        variant={hasBorder ? 'outlined' : 'elevation'}
        elevation={hasBorder ? 1 : 0}
      >
        <div id={`${id}-header`} data-testid={`${id}-header`}>
          <MonthHeader
            view={calendarView}
            onMove={onMove}
            enabled={true}
            minDate={props.minDate}
            maxDate={props.maxDate}
            onYearChange={props.onYearChange}
            onMonthChange={props.onMonthChange}
          />
          <WeekHeader />
        </div>
        <Weeks
          view={calendarView}
          selected={props.selected}
          onSelect={props.onSelect}
          minDate={props.minDate}
          maxDate={props.maxDate}
        />
      </Paper>
    </Container>
  );
}

export { Calendar };
