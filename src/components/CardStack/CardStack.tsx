import React, { forwardRef, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';

import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Box } from '../Box';
import { Icon } from '../Icons';
import { Status } from './Status';

export type CardStackProps = {
  title: string;
  children: React.ReactNode;
  initialCollapsed?: boolean;
  totalItems: number;
  completedItems?: number;
  id?: string;
  onToggle?: (collapsed: boolean) => void;
  active?: boolean;
  loading?: boolean;
  loadingText?: string;
  errorText?: string;
};

const HEADER_HEIGHT = 50;
const CARD_GAP = 3;
const REDUCING_WIDTH = 8;

const Container = styled.div`
  border-radius: 8px;
  width: 100%;
  min-width: 320px;
  background: transparent;
  &[aria-expanded='true'] {
    background: ${({ theme }) => theme.colors.grey[200]};
  }
`;

const Title = styled.span`
  font-size: ${({ theme }) => theme.font.size[300]};
  font-weight: 700;
`;

const Content = styled.div<{ minHeight: number | 'auto' }>`
  position: relative;

  min-height: ${({ minHeight }) =>
    minHeight === 'auto' ? 'auto' : `${minHeight}px`};
  transition: height 0.3s ease;

  &[aria-expanded='true'] {
    padding: 4px;
    margin: 4px;
  }
`;

const EmptyCard = styled.div<{
  zindex: number;
  top: number;
  reducedWidth: number;
  left: number;
}>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: ${({ theme }) => `1px solid ${theme.colors.grey[300]}`};
  border-radius: 4px;
  position: absolute;
  left: ${({ left }) => left}px;
  height: 6px;
  z-index: ${({ zindex }) => zindex};
  top: ${({ top }) => top}px;
  width: ${({ reducedWidth }) => `calc(100% - ${reducedWidth}px)`};
  background: ${({ theme }) => theme.colors.neutral[0]};
`;

const MotionEmptyCard = motion(EmptyCard);

const HeaderCard = styled.div<{
  zindex: number;
}>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: ${({ theme }) => `1px solid ${theme.colors.grey[300]}`};
  border-radius: 4px;
  position: absolute;
  left: 0;
  width: 100%;
  background: ${({ theme }) => theme.colors.neutral[0]};
  &[aria-expanded='true'] {
    background: ${({ theme }) => theme.colors.grey[200]};
    border-color: transparent;
  }

  &[aria-expanded='false'] {
    &[data-active='true'] {
      border-color: ${({ theme }) => theme.colors.grey[600]};
    }
  }

  height: ${HEADER_HEIGHT}px;
  top: 0;
  z-index: ${({ zindex }) => zindex};
  cursor: pointer;
`;

const MotionHeaderCard = motion(HeaderCard);

const ExpandedBox = styled.div`
  margin-top: ${HEADER_HEIGHT}px;
`;

const MotionExpandedBox = motion(ExpandedBox);

const CardStack = forwardRef<HTMLDivElement, CardStackProps>(function CardStack(
  {
    title,
    children,
    initialCollapsed = true,
    totalItems,
    completedItems = 0,
    id = 'card-stack',
    onToggle,
    active,
    loading,
    loadingText,
    errorText,
  },
  ref,
) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  useEffect(() => {
    setIsCollapsed(initialCollapsed);
  }, [initialCollapsed]);

  const handleToggle = () => {
    const collapsed = !isCollapsed;
    setIsCollapsed(collapsed);
    onToggle && onToggle(collapsed);
  };

  const highestZIndex = totalItems - 1;

  const containerMinHeight = highestZIndex * CARD_GAP + HEADER_HEIGHT + 2;
  const minHeight = isCollapsed ? containerMinHeight : 'auto';

  return (
    <Container
      aria-expanded={!isCollapsed}
      ref={ref}
      id={`${id}-container`}
      data-testid={`${id}-container`}
    >
      <Content
        id={`${id}-content`}
        data-testid={`${id}-content`}
        minHeight={minHeight}
        aria-expanded={!isCollapsed}
      >
        <MotionHeaderCard
          aria-expanded={!isCollapsed}
          zindex={highestZIndex}
          onClick={handleToggle}
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          id={`${id}-header-container`}
          data-testid={`${id}-header-container`}
          data-active={active}
        >
          <Box
            padding={16}
            display='flex'
            justifyContent='space-between'
            alignItems='center'
            flex={1}
            id={`${id}-header`}
            data-testid={`${id}-header`}
          >
            <Box
              display='flex'
              alignItems='center'
              justifyContent='flex-start'
              gap={8}
              id={`${id}-header-left`}
              data-testid={`${id}-header-left`}
            >
              <Title
                id={`${id}-header-title`}
                data-testid={`${id}-header-title`}
              >
                {title}
              </Title>
              <Status
                id={id}
                totalItems={totalItems}
                completedItems={completedItems}
                loading={loading}
                loadingText={loadingText}
                errorText={errorText}
              />
            </Box>

            <Icon
              icon={isCollapsed ? faPlus : faMinus}
              id={`${id}-header-icon`}
              data-testid={`${id}-header-icon`}
            />
          </Box>
        </MotionHeaderCard>
        <AnimatePresence>
          {isCollapsed ? (
            <>
              {Array.from({ length: highestZIndex }).map((_, index) => (
                <MotionEmptyCard
                  key={index}
                  zindex={highestZIndex - 1 - index}
                  top={HEADER_HEIGHT - CARD_GAP + index * CARD_GAP}
                  reducedWidth={(index + 1) * REDUCING_WIDTH}
                  left={(index + 1) * (REDUCING_WIDTH / 2)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  id={`${id}-empty-card-${index}`}
                  data-testid={`${id}-empty-card-${index}`}
                />
              ))}
            </>
          ) : (
            <MotionExpandedBox
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              id={`${id}-content-card`}
              data-testid={`${id}-content-card`}
            >
              {children}
            </MotionExpandedBox>
          )}
        </AnimatePresence>
      </Content>
    </Container>
  );
});

export { CardStack };

CardStack.displayName = 'CardStack';
