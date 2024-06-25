import { PropsWithChildren, forwardRef } from 'react';
import { DefaultParticleProps } from '../types';
import styled from '@emotion/styled';
const TagPaddingSize = {
  small: {
    padding: '2px 4px',
    borderRadius: '2px',
  },
  medium: {
    padding: '4px 8px',
    borderRadius: '4px',
  },
  large: {
    padding: '8px 16px',
    borderRadius: '6px',
  },
};
export type TagProps = { noFill?: boolean } & DefaultParticleProps;

const TagContainer = styled.div<DefaultParticleProps>`
  display: flex;
  padding: ${({ size = 'medium' }) => TagPaddingSize[size].padding};
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: ${({ theme }) => theme.font.family.base};
  font-size: ${({ theme }) => theme.font.size[50]};
  font-style: normal;
  font-weight: ${({ theme }) => theme.font.weight.regular};
  line-height: normal;
  border-radius: ${({ size = 'medium' }) => TagPaddingSize[size].borderRadius};
  color: ${({ theme }) => theme.colors.grey[700]};
  border: ${({ theme }) => `1px solid ${theme.colors.grey[100]}`};

  &[data-empty='false'] {
    border: none;
    font-weight: ${({ theme }) => theme.font.weight.medium};
    color: ${({ theme, color }) =>
      color ? theme.colors[color][700] : theme.colors.grey[700]};
    background-color: ${({ theme, color }) =>
      color ? theme.colors[color][100] : theme.colors.grey[100]};
  }
`;

const Content = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Tag = forwardRef<HTMLDivElement, PropsWithChildren<TagProps>>(
  (props, ref) => {
    const {
      color,
      disabled,
      size,
      children,
      noFill = false,
      id = 'tag',
    } = props;
    return (
      <TagContainer
        ref={ref}
        color={color}
        aria-disabled={disabled}
        size={size}
        data-empty={noFill}
        id={id}
        data-testid={id}
      >
        <Content id={`${id}-content`} data-testid={`${id}-content`}>
          {children}
        </Content>
      </TagContainer>
    );
  },
);

Tag.displayName = 'Tag';
