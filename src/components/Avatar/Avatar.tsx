import styled from '@emotion/styled';
import { ParticleColor } from '../types';
import { forwardRef, ForwardedRef } from 'react';

const AvatarContainer = styled.div<{ color?: ParticleColor }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  font-size: 1.25rem;
  line-height: 1;
  border-radius: 50%;
  overflow: hidden;
  user-select: none;
  img {
    width: 100%;
  }

  &.fill {
    background-color: ${({ theme, color }) =>
      color ? theme.colors[color].main : theme.colors.grey[500]};
    color: ${({ theme }) => theme.colors.neutral[0]};
  }

  &.clickable {
    cursor: pointer;
  }
`;

export type AvatarProps = {
  src?: string;
  alt?: string;
  onClick?: () => void;
  children?: string;
  color?: ParticleColor;
  id?: string;
};

const Avatar = forwardRef(
  (props: AvatarProps, ref: ForwardedRef<HTMLDivElement>) => {
    const {
      src,
      alt = 'Avatar',
      onClick,
      children: childrenProp,
      color,
      id = 'avatar',
    } = props;
    let children = null;
    const hasImage = !!src;

    if (hasImage) {
      children = <img src={src} alt={alt} />;
    } else if (
      childrenProp !== null &&
      childrenProp !== '' &&
      typeof childrenProp !== 'boolean'
    ) {
      children = childrenProp;
    } else {
      children = null;
    }

    return (
      <AvatarContainer
        color={color}
        className={`${!hasImage ? 'fill' : ''} ${onClick ? 'clickable' : ''}`}
        onClick={onClick}
        ref={ref}
        id={id}
        data-testid={id}
      >
        {children}
      </AvatarContainer>
    );
  },
);

Avatar.displayName = 'Avatar';

export { Avatar };
