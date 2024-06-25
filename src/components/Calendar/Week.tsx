import { HTMLAttributes, PropsWithChildren } from 'react';

import DateUtilities from './DateUtilities';

import { dayStyles } from './commonStyles';

import styled from '@emotion/styled';
import { useParticleTheme } from '../../core/useParticleTheme';

const StyledButton = styled.button`
  font-family: ${({ theme }) => theme.font.family.base};
  ${dayStyles}
  background-color: ${(props) => props.theme.colors.neutral[0]};
  border-radius: 0.375rem;
  &:hover {
    background-color: ${({ theme }) => theme.colors.grey[100]};
    cursor: pointer;
  }
`;

const isDisabled = (day: Date, minDate?: Date, maxDate?: Date) => {
  return (
    (minDate && DateUtilities.isBefore(day, minDate)) ||
    (maxDate && DateUtilities.isAfter(day, maxDate))
  );
};

function getDayStyles(
  day: Date,
  month: number,
  primaryColor: string,
  whiteColor: string,
  selected?: Date,
) {
  let dayStyles = {};

  if (DateUtilities.isSameDay(day, new Date())) {
    dayStyles = {
      ...dayStyles,
      color: primaryColor,
      fontWeight: 'bold',
    };
  }
  if (month !== day.getMonth()) {
    dayStyles = {
      ...dayStyles,
      ...styles.otherMonth,
    };
  }
  if (selected && DateUtilities.isSameDay(day, selected)) {
    dayStyles = {
      ...dayStyles,
      backgroundColor: primaryColor,
      color: whiteColor,
    };
  }

  if (isDisabled(day)) {
    dayStyles = {
      ...dayStyles,
      ...styles.disabled,
    };
  }
  return dayStyles;
}

function DayButton({
  children,
  ...otherProps
}: PropsWithChildren<
  { disabled?: boolean } & HTMLAttributes<HTMLButtonElement>
>) {
  return <StyledButton {...otherProps}>{children}</StyledButton>;
}
type Props = {
  month: number;
  selected?: Date;
  start: Date;
  onSelect: (date: Date) => void;
  minDate?: Date;
  maxDate?: Date;
  className?: string;
  id?: string;
  // onTransitionEnd: Function;
};

function Week(props: Props) {
  const buildDays = (start: Date) => {
    const days = [DateUtilities.clone(start)];
    let clone = DateUtilities.clone(start);
    for (let i = 1; i <= 6; i++) {
      clone = DateUtilities.clone(clone);
      clone.setDate(clone.getDate() + 1);
      days.push(clone);
    }
    return days;
  };

  // const isOtherMonth = (day: Date) => {
  //   return props.month !== day.getMonth();
  // };

  const onSelect = (day: Date) => {
    if (!isDisabled(day, props.minDate, props.maxDate)) {
      props.onSelect(day);
    }
  };

  const days = buildDays(props.start);
  const { colors } = useParticleTheme();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      {days.map((day, i) => {
        const dayStyle = getDayStyles(
          day,
          props.month,
          colors.primary.main,
          colors.neutral[0],
          props.selected,
        );
        const disabled = isDisabled(day, props.minDate, props.maxDate);
        return (
          <div key={i}>
            <DayButton
              onClick={() => onSelect(day)}
              disabled={disabled}
              aria-disabled={disabled}
              style={{ ...dayStyle }}
            >
              {DateUtilities.toDayOfMonthString(day)}
            </DayButton>
          </div>
        );
      })}
    </div>
  );
}

const styles = {
  otherMonth: {
    color: '#AAA',
  },
  disabled: {
    color: '#E0E0E0',
  },
};

export default Week;
