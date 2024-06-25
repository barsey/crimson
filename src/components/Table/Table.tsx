import styled from '@emotion/styled';
import {
  PropsWithChildren,
  forwardRef,
  ForwardedRef,
  ComponentPropsWithoutRef,
} from 'react';

const TableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: ${({ theme }) => theme.colors.neutral[0]};
  color: ${({ theme }) => theme.colors.grey[900]};
  font-family: ${({ theme }) => theme.font.family.base};
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 18.2px; /* 140% */
  padding: 4px 0px 0px 8px;
  border-radius: 5px;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.08);
`;

export type TableProps = ComponentPropsWithoutRef<'table'>;

export const Table = forwardRef<
  HTMLTableElement,
  PropsWithChildren<TableProps>
>(function Table(
  { children, ...otherProps }: PropsWithChildren<TableProps>,
  ref: ForwardedRef<HTMLTableElement>,
) {
  return (
    <TableContainer ref={ref} {...otherProps}>
      {children}
    </TableContainer>
  );
});

Table.displayName = 'Table';
