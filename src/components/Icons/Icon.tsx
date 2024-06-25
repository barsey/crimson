import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import { ParticleColor } from '../types';
import { useTheme } from '@emotion/react';
import { useMemo } from 'react';

export interface IconProps extends Omit<FontAwesomeIconProps, 'color'> {
  color?: ParticleColor | string;
}
function isParticleColor(color?: string): color is ParticleColor {
  if (!color) return false;
  return [
    'success',
    'error',
    'warning',
    'info',
    'primary',
    'secondary',
  ].includes(color);
}

export const Icon = (props: IconProps) => {
  const { icon, color, fontSize, style, ...otherProps } = props;

  const { colors } = useTheme();
  const iconColor = useMemo(() => {
    if (isParticleColor(color)) {
      return colors[color].main;
    }
    return color;
  }, [color, colors]);

  return (
    <FontAwesomeIcon
      icon={icon}
      color={iconColor}
      style={{ fontSize, color: iconColor, ...style }}
      data-testid='particle-icon'
      {...otherProps}
    />
  );
};
