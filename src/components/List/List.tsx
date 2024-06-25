import styled from '@emotion/styled';

const StyledList = styled.div`
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 100%;
`;

export type ListProps = {
  children: React.ReactNode;
  id?: string;
};

export const List: React.FC<ListProps> = ({ children, id = 'list' }) => {
  return (
    <StyledList id={id} data-testid={id}>
      {children}
    </StyledList>
  );
};
