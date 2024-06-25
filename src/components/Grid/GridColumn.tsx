import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { mq } from './utils';
import { HTMLAttributes, PropsWithChildren } from 'react';
import { useGrid } from './useGrid';
type DefaultColProps = {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
};
type ColProps = DefaultColProps & {
  gutterWidth?: number;
  halfGutterWidth?: number;
  spacing?: number;
};

const Col = styled.div<ColProps>`
  box-sizing: border-box;
  flex: 0 0 auto;
  flex-basis: 100%;

  padding: ${({ spacing = 0 }) => (spacing !== 0 ? spacing * 4 : 0)}px;
  max-width: 100%;
  flex-grow: 1;

  &.reverse {
    flex-direction: column-reverse;
  }

  ${({ xs = 12, sm = 0, md = 0, lg = 0, xl = 0, gutterWidth }) => css`
    flex-basis: calc(${(100 / 12) * xs}% - ${gutterWidth}px);
    max-width: calc(${(100 / 12) * xs}% - ${gutterWidth}px);

    ${sm && mq('sm')} {
      flex-basis: calc(${(100 / 12) * sm}% - ${gutterWidth}px);
      max-width: calc(${(100 / 12) * sm}% - ${gutterWidth}px);
    }

    ${md && mq('md')} {
      flex-basis: calc(${(100 / 12) * md}% - ${gutterWidth}px);
      max-width: calc(${(100 / 12) * md}% - ${gutterWidth}px);
    }

    ${lg && mq('lg')} {
      flex-basis: calc(${(100 / 12) * lg}% - ${gutterWidth}px);
      max-width: calc(${(100 / 12) * lg}% - ${gutterWidth}px);
    }

    ${xl && mq('xl')} {
      flex-basis: calc(${(100 / 12) * xl}% - ${gutterWidth}px);
      max-width: calc(${(100 / 12) * xl}% - ${gutterWidth}px);
    }
  `}
`;

type GridColumnProps = DefaultColProps & HTMLAttributes<HTMLDivElement>;
export function GridColumn({
  children,
  ...restProps
}: PropsWithChildren<GridColumnProps>) {
  const { gutterWidth, halfGutterWidth, spacing } = useGrid();
  return (
    <Col
      gutterWidth={gutterWidth}
      halfGutterWidth={halfGutterWidth}
      spacing={spacing}
      {...restProps}
    >
      {children}
    </Col>
  );
}
