import styled from '@emotion/styled';
import {
  PropsWithChildren,
  forwardRef,
  ForwardedRef,
  ComponentPropsWithoutRef,
} from 'react';

const TableHeadContainer = styled.thead`
  padding: 8px;
  text-align: left;
  cursor: pointer;
  font-weight: 700;
  box-shadow: ${({ theme }) => `0px 1px 0px 0px ${theme.colors.grey[100]}`};
`;

export type TableHeadProps = ComponentPropsWithoutRef<'thead'>;

export const TableHead = forwardRef(
  (
    { children, ...props }: PropsWithChildren<TableHeadProps>,
    ref: ForwardedRef<HTMLTableSectionElement>,
  ) => {
    return (
      <TableHeadContainer ref={ref} {...props}>
        {children}
      </TableHeadContainer>
    );
  },
);

TableHead.displayName = 'TableHead';
