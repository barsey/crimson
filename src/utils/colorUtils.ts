export const contrastThreshold = 4.5;

function hexToRgb(hex: string) {
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

function luminance(r: number, g: number, b: number) {
  var a = [r, g, b].map(function (v) {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

export function getContrastRatio(foreground: string, background: string) {
  const color1rgb = hexToRgb(foreground);
  const color2rgb = hexToRgb(background);

  if (!color1rgb || !color2rgb) {
    return 0;
  }

  const color1luminance = luminance(color1rgb.r, color1rgb.g, color1rgb.b);
  const color2luminance = luminance(color2rgb.r, color2rgb.g, color2rgb.b);

  return (
    (Math.max(color1luminance, color2luminance) + 0.05) /
    (Math.min(color1luminance, color2luminance) + 0.05)
  );
}

export function getContrastText(background: string) {
  const contrast = getContrastRatio('#ffffff', background);

  const contrastText = contrast >= contrastThreshold ? '#ffffff' : '#000000';

  if (process.env.NODE_ENV !== 'production') {
    if (contrast < 3) {
      console.error(
        [
          `MUI: The contrast ratio of ${contrast}:1 for ${contrastText} on ${background}`,
          'falls below the WCAG recommended absolute minimum contrast ratio of 3:1.',
          'https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast',
        ].join('\n'),
      );
    }
  }

  return contrastText;
}
