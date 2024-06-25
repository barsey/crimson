import styled from '@emotion/styled';
import { HTMLAttributes, PropsWithChildren } from 'react';
import { useGrid } from './useGrid';

const Row = styled.div<{ gutterCompensation?: number }>`
  box-sizing: border-box;
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: ${({ gutterCompensation }) => gutterCompensation ?? -8}px;
  margin-right: ${({ gutterCompensation }) => gutterCompensation ?? -8}px;

  &.reverse {
    flex-direction: row-reverse;
  }
`;
type GridRowProps = HTMLAttributes<HTMLDivElement>;
export function GridRow({
  children,
  ...restProps
}: PropsWithChildren<GridRowProps>) {
  const { gutterCompensation } = useGrid();
  return (
    <Row gutterCompensation={gutterCompensation} {...restProps}>
      {children}
    </Row>
  );
}
