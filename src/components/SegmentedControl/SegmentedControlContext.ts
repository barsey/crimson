import { createContext, useContext } from 'react';
import { ParticleColor, ParticleSize } from '../types';

interface SegmentedControlContextValue {
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
  color?: ParticleColor;
  size?: ParticleSize;
}

export const SegmentedControlContext =
  createContext<SegmentedControlContextValue | null>(null);

export const useSegmentedControl = () => {
  const context = useContext(SegmentedControlContext);
  if (!context) {
    throw new Error(
      'useSegmentedControl must be used within a SegmentedControlProvider',
    );
  }
  return context;
};
