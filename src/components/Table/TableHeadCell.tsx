import styled from '@emotion/styled';
import {
  PropsWithChildren,
  forwardRef,
  ForwardedRef,
  ComponentPropsWithoutRef,
} from 'react';

const TableHeadCellContainer = styled.th`
  padding: 8px 12px;
  text-align: left;
  cursor: pointer;
  user-select: none;
`;

export type TableHeadCellProps = ComponentPropsWithoutRef<'th'>;

export const TableHeadCell = forwardRef(
  (
    { children, ...props }: PropsWithChildren<TableHeadCellProps>,
    ref: ForwardedRef<HTMLTableCellElement>,
  ) => {
    return (
      <TableHeadCellContainer ref={ref} {...props}>
        {children}
      </TableHeadCellContainer>
    );
  },
);

TableHeadCell.displayName = 'TableHeadCell';
