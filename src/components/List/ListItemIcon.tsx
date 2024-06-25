import styled from '@emotion/styled';

const StyledListItemIcon = styled.div`
  margin-right: 16px;
  display: flex;
  align-items: center;
`;

export type ListItemIconProps = {
  children: React.ReactNode;
  id?: string;
};

export const ListItemIcon: React.FC<ListItemIconProps> = ({
  children,
  id = 'list-item-icon',
}) => {
  return (
    <StyledListItemIcon id={id} data-testid={id}>
      {children}
    </StyledListItemIcon>
  );
};
