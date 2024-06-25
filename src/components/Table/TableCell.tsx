import styled from '@emotion/styled';
import { ComponentPropsWithoutRef, PropsWithChildren, forwardRef } from 'react';

const TableCellContainer = styled.td`
  padding: 8px 12px;
  text-align: left;
`;

export type TableCellProps = ComponentPropsWithoutRef<'td'>;

export const TableCell = forwardRef<
  HTMLTableCellElement,
  PropsWithChildren<TableCellProps>
>(({ children, ...props }, ref) => {
  return (
    <TableCellContainer ref={ref} {...props} role='cell'>
      {children}
    </TableCellContainer>
  );
});

TableCell.displayName = 'TableCell';
