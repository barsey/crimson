import styled from '@emotion/styled';
import { ParticleColor } from '../types';

export const HelperText = styled.span<{ color?: ParticleColor }>`
  padding-left: 2px;
  font-size: ${({ theme }) => theme.font.size[25]};
  line-height: 18px;
  color: ${({ color = 'error', theme }) => theme.colors[color].main};
  height: 18px;
`;
