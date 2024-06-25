import React, { ReactNode, useRef, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';
import { SegmentedControlContext } from './SegmentedControlContext';
import { ParticleColor, ParticleSize } from '../types';
import { ParticleHeights } from '../constants';

export interface SegmentedControlProps {
  children: ReactNode;
  initialSelectedIndex?: number;
  color?: ParticleColor;
  size?: ParticleSize;
  id?: string;
}

const RootContainer = styled.div<{ size?: ParticleSize }>`
  display: flex;
  background: ${({ theme }) => theme.colors.grey[200]};
  border-radius: 4px;
  border: ${({ theme }) => `1px solid ${theme.colors.grey[300]}`};
  width: fit-content;
  height: ${({ size = 'medium' }) =>
    ParticleHeights[size] - 2}px; // Subtract 2px to account for border
`;

const Container = styled.div`
  display: flex;
  position: relative;
  border: none;
  gap: 4px;
  margin: 2px;
  overflow: hidden; // Ensures the animated div doesn't overflow the rounded borders
`;

const StyledIndicator = styled.div<{ color?: ParticleColor; hide?: boolean }>`
  box-sizing: border-box;
  position: absolute;
  margin: 0; // Reset margin
  top: 0;
  height: 100%;
  border-radius: 4px;
  border: ${({ theme, color, hide = false }) =>
    hide
      ? 'none'
      : `1px solid ${color ? theme.colors[color].main : theme.colors.grey[400]}`};
  background: ${({ theme, color }) =>
    color ? theme.colors[color].main : theme.colors.neutral[0]};
`;

const AnimatedIndicator = motion(StyledIndicator);

function SegmentedControl({
  children,
  initialSelectedIndex = 0,
  color = undefined,
  size = 'medium',
  id = 'segmented-control',
}: SegmentedControlProps) {
  const [selectedIndex, setSelectedIndex] = useState(initialSelectedIndex || 0);
  const refsArray = useRef<(HTMLElement | null)[]>([]);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    if (refsArray.current[selectedIndex]) {
      const { offsetLeft, clientWidth } = refsArray.current[selectedIndex]!;
      setIndicatorStyle({ left: offsetLeft, width: clientWidth });
    }
  }, [selectedIndex]);

  return (
    <SegmentedControlContext.Provider
      value={{ selectedIndex, setSelectedIndex, color, size }}
    >
      <RootContainer size={size} data-testid={`${id}-root`} id={`${id}-root`}>
        <Container data-testid={`${id}-container`} id={`${id}-container`}>
          {React.Children.map(children, (child, index) =>
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            React.cloneElement(child as React.ReactElement<any>, {
              index,
              ref: (el: HTMLElement) => (refsArray.current[index] = el),
            }),
          )}
          <AnimatePresence>
            <AnimatedIndicator
              initial={false}
              animate={indicatorStyle}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              color={color}
              data-testid={`${id}-indicator`}
              id={`${id}-indicator`}
              hide={selectedIndex === -1}
            />
          </AnimatePresence>
        </Container>
      </RootContainer>
    </SegmentedControlContext.Provider>
  );
}

SegmentedControl.displayName = 'SegmentedControl';

export { SegmentedControl };
