import { ParticleTheme } from '../core/theme.types';
import { getContrastText } from '../utils/colorUtils';
import {
  blue,
  green,
  red,
  yellow,
  grey,
  neutral,
  indigo,
  grape,
} from '../colors';
import {
  borderRadius,
  borderWidths,
  shadows,
  spacings,
} from '../core/constants';
import { ParticleSize } from '../components/types';
import { ParticleSpacingMap } from '../components/constants';

export const DEFAULT_THEME: ParticleTheme = {
  spacing: 1,
  spacings: {
    ...spacings,
    main: spacings[100],
  },
  border: {
    radius: {
      ...borderRadius,
      main: borderRadius[100],
    },
    width: {
      ...borderWidths,
      main: borderWidths[100],
    },
  },
  shadow: {
    ...shadows,
    main: shadows[100],
  },

  colors: {
    primary: { ...indigo, main: indigo[500] },
    secondary: { ...grape, main: grape[500] },
    error: { ...red, main: red[500] },
    warning: { ...yellow, main: yellow[500] },
    info: { ...blue, main: blue[500] },
    success: { ...green, main: green[500] },
    neutral,
    grey: { ...grey, main: grey[500] },
  },
  font: {
    family: {
      base: "'Roboto', sans-serif",
    },
    weight: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    size: {
      25: '12px',
      50: '13px',
      100: '14px',
      200: '16px',
      300: '18px',
      400: '20px',
      500: '24px',
      600: '30px',
    },
  },
  lineHeight: {
    100: 1,
    200: 1.25,
    300: 1.5,
  },
  getContrastText,
  verticalTextSpacing: function Spacing(size: ParticleSize) {
    return this.spacings.main * ParticleSpacingMap[size];
  },
};
