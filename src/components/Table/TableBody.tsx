import styled from '@emotion/styled';
import {
  PropsWithChildren,
  forwardRef,
  ForwardedRef,
  ComponentPropsWithoutRef,
} from 'react';

const TableBodyContainer = styled.tbody``;

export type TableBodyProps = ComponentPropsWithoutRef<'tbody'>;

export const TableBody = forwardRef(function TableBody(
  { children, ...props }: PropsWithChildren<TableBodyProps>,
  ref: ForwardedRef<HTMLTableSectionElement>,
) {
  return (
    <TableBodyContainer ref={ref} {...props}>
      {children}
    </TableBodyContainer>
  );
});

TableBody.displayName = 'TableBody';
