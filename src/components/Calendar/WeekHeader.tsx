import styled from '@emotion/styled';
import { dayStyles } from './commonStyles';
import { Box } from '../Box';

const weekNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const WeekNameContainer = styled.div`
  ${dayStyles}
`;

type WeekHeaderProps = {
  id?: string;
};

const weekHeader = ({ id = 'week-header' }: WeekHeaderProps) => (
  <Box
    display='flex'
    flexDirection='row'
    justifyContent='space-between'
    alignItems='center'
    paddingTop={10}
    paddingBottom={10}
    id={id}
    data-testid={id}
  >
    {weekNames.map((item, index) => (
      <WeekNameContainer
        key={index}
        id={`${id}-name-container-${index}`}
        data-testid={`${id}-name-container-${index}`}
      >
        <span id={`${id}-name-${index}`} data-testid={`${id}-name-${index}`}>
          {item}
        </span>
      </WeekNameContainer>
    ))}
  </Box>
);

export default weekHeader;
