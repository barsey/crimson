import styled from '@emotion/styled';
import { ComponentPropsWithoutRef, PropsWithChildren, forwardRef } from 'react';

const TableRowContainer = styled.tr``;

export type TableRowProps = ComponentPropsWithoutRef<'tr'>;

export const TableRow = forwardRef<
  HTMLTableRowElement,
  PropsWithChildren<TableRowProps>
>(({ children, ...props }, ref) => {
  return (
    <TableRowContainer ref={ref} {...props} role='row'>
      {children}
    </TableRowContainer>
  );
});

TableRow.displayName = 'TableRow';
