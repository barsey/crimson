import styled from '@emotion/styled';
import { ParticleSize } from '../types';
import { ParticleHeights } from '../constants';

export const StyledInput = styled.input<{
  inputsize?: ParticleSize;
  multiline?: boolean;
}>`
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  height: ${({ inputsize = 'medium', multiline }) =>
    multiline ? 'auto' : `${ParticleHeights[inputsize]}px`};
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
  flex-shrink: 0;
  border-radius: 0.25rem;
  border: ${({ theme }) => `1px solid ${theme.colors.grey[400]}`};
  background: ${({ theme }) => theme.colors.neutral[0]};
  transition: border-color 0.3s ease;
  font-size: ${({ theme }) => theme.font.size[100]};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  font-family: ${({ theme }) => theme.font.family.base};
  resize: ${({ multiline }) => (multiline ? 'vertical' : 'none')};
  &:focus {
    border-color: ${({ theme }) => theme.colors.grey[900]};
    outline: none;
  }
  &:hover {
    border-color: ${({ theme }) => theme.colors.grey[700]};
  }
  &:disabled {
    background-color: ${({ theme }) => theme.colors.grey[200]};
    color: ${({ theme }) => theme.colors.grey[600]};
    border-color: ${({ theme }) => theme.colors.grey[400]};
    outline: none;
  }
  &[aria-readonly='true'] {
    background-color: ${({ theme }) => theme.colors.grey[200]};
    color: ${({ theme }) => theme.colors.grey[900]};
    border-color: ${({ theme }) => theme.colors.grey[400]};
    outline: none;
  }
  &.error {
    border-color: ${({ theme }) => theme.colors.error[500]};
  }
`;
