import styled from '@emotion/styled';
import { Box } from '../Box';

interface StyledListItemProps {
  clickable?: boolean;
  selected?: boolean;
}

const StyledListItem = styled.div<StyledListItemProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  cursor: ${({ clickable }) => (clickable ? 'pointer' : 'default')};
  background-color: ${({ selected, theme }) =>
    selected ? theme.colors.info[50] : 'transparent'};

  &:hover {
    background-color: ${({ clickable, selected, theme }) =>
      selected
        ? theme.colors.info[100]
        : clickable
          ? theme.colors.grey[100]
          : 'transparent'};
  }
`;

export type ListItemProps = {
  children: React.ReactNode;
  onClick?: () => void;
  selected?: boolean;
  secondaryAction?: React.ReactNode;
  id?: string;
};

export const ListItem: React.FC<ListItemProps> = ({
  children,
  onClick,
  selected,
  secondaryAction,
  id = 'list-item',
}) => {
  return (
    <StyledListItem
      data-testid={id}
      id={id}
      onClick={onClick}
      clickable={!!onClick}
      selected={selected}
    >
      <Box
        display='flex'
        alignItems='center'
        id={`${id}-content`}
        data-testid={`${id}-content`}
      >
        {children}
      </Box>
      {secondaryAction && (
        <div
          id={`${id}-secondary-action-content`}
          data-testid={`${id}-secondary-action-content`}
        >
          {secondaryAction}
        </div>
      )}
    </StyledListItem>
  );
};
