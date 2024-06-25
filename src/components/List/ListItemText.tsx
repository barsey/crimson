import styled from '@emotion/styled';

interface StyledProps {
  inset?: boolean;
}

const StyledListItemText = styled.div<StyledProps>`
  flex-grow: 1;
  ${({ inset }) => inset && `padding-left: 32px;`};

  .primary {
    font-size: 16px;
  }

  .secondary {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.grey[700]};
  }
`;

export interface ListItemTextProps extends StyledProps {
  primary: React.ReactNode;
  secondary?: React.ReactNode;
  id?: string;
}

export const ListItemText: React.FC<ListItemTextProps> = ({
  primary,
  secondary,
  inset,
  id = 'list-item-text',
}) => {
  return (
    <StyledListItemText
      inset={inset}
      id={`${id}-content`}
      data-testid={`${id}-content`}
    >
      <div
        className='primary'
        id={`${id}-primary`}
        data-testid={`${id}-primary`}
      >
        {primary}
      </div>
      {secondary && (
        <div
          id={`${id}-secondary`}
          data-testid={`${id}-secondary`}
          className='secondary'
        >
          {secondary}
        </div>
      )}
    </StyledListItemText>
  );
};
