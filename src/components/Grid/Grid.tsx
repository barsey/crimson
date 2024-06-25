import styled from '@emotion/styled';
import { HTMLAttributes, PropsWithChildren, useEffect, useState } from 'react';
import { GridContext } from './GridContext';
import { GridRow } from './GridRow';
import { GridColumn } from './GridColumn';
// import { breakpoints, mq } from './utils';

// A grid component using the following css as inspiration.
// https://github.com/kristoferjoseph/flexboxgrid/blob/master/src/css/flexboxgrid.css
const Container = styled.div<{ gutterWidth?: number }>`
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  padding-right: 8px;
  padding-left: 8px;
  width: 100%;
`;

// const OldImplementation = styled.div<{ gutterWidth?: number }>`
//   box-sizing: border-box;
//   margin-left: auto;
//   margin-right: auto;
//   padding-right: 8px;
//   padding-left: 8px;

//   ${mq('xs')} {
//     width: 100%;
//   }

//   ${mq('sm')} {
//     width: ${({ gutterWidth }) =>
//       `calc(${breakpoints.sm}px - ${gutterWidth}px)`};
//     max-width: 100%;
//   }

//   ${mq('md')} {
//     width: ${({ gutterWidth }) =>
//       `calc(${breakpoints.md}px - ${gutterWidth}px)`};
//     max-width: 100%;
//   }

//   ${mq('lg')} {
//     width: ${({ gutterWidth }) =>
//       `calc(${breakpoints.lg}px - ${gutterWidth}px)`};
//     max-width: 100%;
//   }

//   ${mq('xl')} {
//     width: ${({ gutterWidth }) =>
//       `calc(${breakpoints.xl}px - ${gutterWidth}px)`};
//     max-width: 100%;
//   }
// `;

export type GridProviderProps = {
  spacing?: number;
  gutterWidth?: number;
} & HTMLAttributes<HTMLDivElement>;

function Grid(props: PropsWithChildren<GridProviderProps>) {
  const { children, spacing = 0, gutterWidth = 0, ...restProps } = props;
  const [gridSpacing, setGridSpacing] = useState<number>();
  const [gutter, setGutter] = useState<number>(0);

  useEffect(() => {
    setGridSpacing(spacing);
  }, [spacing]);

  useEffect(() => {
    if (gutterWidth) {
      setGutter(gutterWidth);
    }
  }, [gutterWidth]);

  return (
    <GridContext.Provider
      value={{
        spacing: gridSpacing,
        gutterWidth: gutter,
        gutterCompensation: gutter * 0.5 * -1,
        halfGutterWidth: gutter * 0.5,
      }}
    >
      <Container gutterWidth={gutter} {...restProps}>
        {children}
      </Container>
    </GridContext.Provider>
  );
}

Grid.Row = GridRow;
Grid.Col = GridColumn;

export { Grid };
