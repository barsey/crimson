import { Placement } from '@floating-ui/react';
import { ParticleColor, ParticleSize } from '../types';
export type ActionMenuPlacement = Placement;
export interface ActionMenuProps {
  label?: string;
  renderContent?: React.ReactNode;
  nested?: boolean;
  children?: React.ReactNode;
  disabled?: boolean;
  color?: ParticleColor;
  placement?: ActionMenuPlacement;
  itemSize?: ParticleSize;
  id?: string;
}
