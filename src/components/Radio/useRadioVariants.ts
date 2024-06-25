import { ParticleColor, ParticleSize } from '../types';
import { useMemo } from 'react';
import { RadioSizes } from './types';
import { Variants } from 'framer-motion';
import { useParticleTheme } from '../../core/useParticleTheme';

function getVariants({
  initialColor,
  selectedColor,
  hover,
  multiplier,
  disabledColor,
  disabledSelectedColor,
  errorColor,
  readOnlyColor,
  readOnlySelectedColor,
}: {
  initialColor: string;
  selectedColor: string;
  hover: string;
  multiplier: number;
  disabledColor: string;
  disabledSelectedColor: string;
  errorColor: string;
  readOnlyColor: string;
  readOnlySelectedColor: string;
}): Variants {
  return {
    initial: {
      border: `1px solid ${initialColor}`,
      transition: {
        duration: 0.1,
      },
    },
    selected: {
      border: `${multiplier * 0.3}px solid ${selectedColor}`,
      transition: {
        duration: 0.1,
      },
    },
    hover: {
      border: `1px solid ${hover}`,
      transition: {
        duration: 0.1,
      },
    },
    disabled: {
      border: `1px solid ${disabledColor}`,
      transition: {
        duration: 0.1,
      },
    },
    disabledSelected: {
      border: `${multiplier * 0.3}px solid ${disabledSelectedColor}`,
      transition: {
        duration: 0.1,
      },
    },
    error: {
      border: `1px solid ${errorColor}`,
      transition: {
        duration: 0.1,
      },
    },
    readOnly: {
      border: `1px solid ${readOnlyColor}`,
      transition: {
        duration: 0.1,
      },
    },
    readOnlySelected: {
      border: `${multiplier * 0.3}px solid ${readOnlySelectedColor}`,
      transition: {
        duration: 0.1,
      },
    },
  };
}

export function useRadioVariants(
  color: ParticleColor = 'primary',
  size: ParticleSize = 'medium',
) {
  const { colors } = useParticleTheme();

  const variants = useMemo(
    () =>
      getVariants({
        initialColor: colors.grey[400],
        selectedColor: colors[color].main,
        hover: colors.grey[700],
        multiplier: RadioSizes[size],
        disabledColor: colors.grey[200],
        disabledSelectedColor: colors.grey[200],
        readOnlyColor: colors.grey[200],
        readOnlySelectedColor: colors.grey[200],
        errorColor: colors.error.main,
      }),
    [colors, color, size],
  );

  return {
    variants,
  };
}
