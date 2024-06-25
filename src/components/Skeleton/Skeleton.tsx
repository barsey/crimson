import React from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';

export type SkeletonProps = {
  height: React.CSSProperties['height'];
  width?: React.CSSProperties['width'];
  circle?: boolean; // If true, makes the skeleton a circle
  animate?: boolean; // Controls the animation, true by default
  id?: string;
};

const animationVariants = {
  animate: {
    opacity: [0.4, 1, 0.4],
    transition: {
      duration: 1.5,
      ease: 'linear',
      repeat: Infinity,
    },
  },
};

const Container = styled.div<{
  circle?: boolean;
}>`
  border-radius: ${({ theme, circle }) =>
    circle ? '50%' : theme.border.radius.main};
  background-color: ${({ theme }) => theme.colors.grey[200]};
`;

const MotionContainer = motion(Container);

const Skeleton: React.FC<SkeletonProps> = ({
  height,
  width = '100%',
  circle = false,
  animate = true,
  id = 'skeleton',
}) => {
  const skeletonStyle = {
    height: circle ? height : height,
    width: circle ? height : width, // When circle is true, width matches height
  };

  return (
    <MotionContainer
      initial={{ opacity: 1 }}
      animate={animate ? 'animate' : ''}
      variants={animationVariants}
      circle={circle}
      style={skeletonStyle}
      data-testid={`${id}-${animate ? 'animated' : 'static'}`}
      id={`${id}-${animate ? 'animated' : 'static'}`}
    />
  );
};

export { Skeleton };
