import { ParticleSize } from '../types';

export type BaseModalOptions = {
  initialOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  disableOutsidePressAndEscape?: boolean;
};

export type ModalSize = ParticleSize | 'extraSmall' | 'extraLarge';
