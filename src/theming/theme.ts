import { ParticleTheme } from '../core/theme.types';
import {
  getContrastText,
  getButtonBackground,
  getButtonColor,
  getButtonBorder,
} from '../utils/colorUtils';

export const defaultTheme: ParticleTheme = {
  colors: {
    primary: '#7b2ff7',
    secondary: '#9c27b0', // '#f107a3',
    error: '#d32f2f',
    warning: '#ed6c02',
    info: '#0288d1',
    success: '#2e7d32',
  },
  getContrastText,
  getButtonBackground,
  getButtonColor,
  getButtonBorder,
};
