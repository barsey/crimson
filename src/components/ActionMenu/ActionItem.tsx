import styled from '@emotion/styled';
import { ParticleColor, ParticleSize } from '../types';
import { ParticleHeights } from '../constants';

export const ActionItem = styled.button<{
  itemSize?: ParticleSize;
  color?: ParticleColor;
}>`
  outline: 0;
  background-color: transparent;
  border: none;
  &:hover {
    cursor: pointer;
  }

  &.RootMenu,
  &.MenuItem {
    font-size: ${({ theme }) => theme.font.size[100]};
    font-family: ${({ theme }) => theme.font.family.base};
    color: ${({ theme, color }) =>
      color ? theme.colors[color].main : theme.colors.neutral[1000]};
  }

  &.RootMenu {
    height: ${({ itemSize = 'medium' }) => ParticleHeights[itemSize]}px;
    border-radius: 4px;
    color: ${({ theme }) => theme.colors.neutral[1000]};
    background-color: ${({ theme }) => theme.colors.neutral[0]};
    border: ${({ theme, color }) =>
      `1px solid ${color ? theme.colors[color].main : theme.colors.grey[400]}`};
    display: flex;
    padding: ${({ theme, itemSize = 'medium' }) =>
      `${theme.verticalTextSpacing(itemSize)}px`};
    justify-content: center;
    align-items: center;
    box-shadow: ${({ theme }) => theme.shadow.main};
    svg {
      fill: ${({ theme, color }) =>
        color ? theme.colors[color].main : theme.colors.neutral[1000]};
    }
    &[data-open],
    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.colors.grey[50]};
      border-color: ${({ theme, color }) =>
        color ? theme.colors[color][700] : theme.colors.grey[700]};
      svg {
        fill: ${({ theme, color }) =>
          color ? theme.colors[color][700] : theme.colors.neutral[1000]};
      }
    }
    &[aria-disabled='true'] {
      background-color: ${({ theme }) => theme.colors.grey[100]};
      border-color: ${({ theme }) => theme.colors.grey[400]};
      color: ${({ theme }) => theme.colors.grey[600]};
      cursor: not-allowed;
      svg {
        fill: ${({ theme }) => theme.colors.grey[600]};
      }
    }

    position: relative;

    &:focus {
      &::after {
        content: '';
        position: absolute;
        top: -5px;
        left: -5px;
        right: -5px;
        bottom: -5px;
        border: ${({ theme, color = 'primary' }) =>
          `1px solid ${theme.colors[color][300]}`};
        border-radius: 6px;
        z-index: 1;
        pointer-events: none; /* Ensure clicks pass through to the button */
      }
    }
  }

  &.MenuItem {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: none;
    width: 100%;
    border: none;
    border-radius: 4px;
    text-align: left;
    line-height: 1.8;
    min-width: 110px;
    margin: 0;
    outline: 0;
    &:focus,
    &[data-nested][data-open]:not([data-focus-inside]),
    &[data-focus-inside][data-open] {
      background: ${({ theme }) => theme.colors.grey[200]};
    }
    &[disabled] {
      color: ${({ theme }) => theme.colors.grey[500]};
      cursor: default;
    }
  }
`;
