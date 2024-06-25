import DateUtilities from './DateUtilities';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Icon } from '../Icons';
import styled from '@emotion/styled';

const ArrowButton = styled.button`
  padding: 0.25rem 0.5rem;
  height: 1.5rem;
  width: auto;
  border-radius: 0.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border: none;
  &:hover {
    background-color: ${({ theme }) => theme.colors.grey[100]};
    cursor: pointer;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 4px;
`;
const MonthYearView = styled.span`
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
type MonthHeaderProps = {
  view: Date;
  enabled: boolean;
  onMove: (view: Date, isForward: boolean) => void;
  minDate?: Date;
  maxDate?: Date;
  onYearChange?: (year: number) => void;
  onMonthChange?: (month: number) => void;
  id?: string;
};
function MonthHeader({ id = 'month-header', ...props }: MonthHeaderProps) {
  const moveBackward = () => {
    const view = DateUtilities.clone(props.view);
    view.setMonth(view.getMonth() - 1);
    move(view, false);
  };

  const moveForward = () => {
    const view = DateUtilities.clone(props.view);
    view.setMonth(view.getMonth() + 1);
    move(view, true);
  };

  const move = (view: Date, isForward: boolean) => {
    if (!props.enabled) return;

    props.onMove(view, isForward);
  };

  const { minDate, maxDate, enabled } = props;
  const isMoveLeftDisabled = enabled
    ? minDate
      ? DateUtilities.isMonthGreaterOrEqual(minDate, props.view)
      : false
    : false;
  const isMoveRightDisabled = enabled
    ? maxDate
      ? DateUtilities.isMonthGreaterOrEqual(props.view, maxDate)
      : false
    : false;

  const monthYearView = `${DateUtilities.toMonthString(
    props.view,
  )} ${DateUtilities.toYearString(props.view)}`;

  return (
    <Container id={`${id}-container`} data-testid={`${id}-container`}>
      <ArrowButton
        id={`${id}-icon-left-container`}
        data-testid={`${id}-icon-left-container`}
        disabled={isMoveLeftDisabled}
        onClick={moveBackward}
      >
        <Icon
          id={`${id}-icon-left`}
          data-testid={`${id}-icon-left`}
          icon={faArrowLeft}
        />
      </ArrowButton>
      <MonthYearView id={`${id}-year-view`} data-testid={`${id}-year-view`}>
        {monthYearView}
      </MonthYearView>

      <ArrowButton
        id={`${id}-icon-right-container`}
        data-testid={`${id}-icon-right-container`}
        onClick={moveForward}
        disabled={isMoveRightDisabled}
      >
        <Icon
          id={`${id}-icon-right`}
          data-testid={`${id}-icon-right`}
          icon={faArrowRight}
        />
      </ArrowButton>
    </Container>
  );
}

export default MonthHeader;
