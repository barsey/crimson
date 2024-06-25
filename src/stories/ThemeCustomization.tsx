import { ParticleProvider } from '../core';
import { Box, Button, ParticleColor, Checkbox, Radio } from '../components';
import { useState } from 'react';
import { generateColorShades } from '@/utils/colorUtils';
import styled from '@emotion/styled';

import { createColorTheme } from '@/theming/createColorTheme';
import { createDefaultTheme } from '@/theming/createDefaultTheme';

const ColorPickerType = {
  primary: 'primary',
  success: 'success',
  info: 'info',
  warning: 'warning',
  error: 'error',
};

const ColorPicker = styled.input`
  width: 60px;
  height: 30px;
  margin: 10px;
`;

const { colors } = createDefaultTheme();

export function ThemeCustomization() {
  const [themeColors, setThemeColors] = useState({
    colors,
  });

  const handleColorChange =
    (colorType: keyof typeof ColorPickerType) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!themeColors) return;

      const shades = createColorTheme({
        ...themeColors,
        colors: {
          [colorType]: generateColorShades(e.target.value),
        },
      });

      setThemeColors(shades);
    };

  return (
    <Box>
      <Box marginBottom={24}>
        <h2>Customize Theme Colors</h2>
        {Object.keys(ColorPickerType).map((colorType) => (
          <div key={colorType}>
            <label>{colorType.toUpperCase()}:</label>
            <ColorPicker
              type='color'
              onChange={handleColorChange(
                colorType as keyof typeof ColorPickerType,
              )}
              value={
                themeColors.colors[colorType as keyof typeof ColorPickerType]
                  .main
              }
            />
          </div>
        ))}
      </Box>
      <ParticleProvider theme={themeColors}>
        <div>
          <Box display='flex' flexDirection='column' gap={16}>
            <Box display='flex' gap={8} flexWrap='wrap'>
              {Object.keys(ColorPickerType).map((colorType) => (
                <Button key={colorType} color={colorType as ParticleColor}>
                  {colorType}
                </Button>
              ))}
            </Box>
            <Box display='flex' gap={8} flexWrap='wrap'>
              {Object.keys(ColorPickerType).map((colorType) => (
                <Checkbox
                  name={colorType}
                  key={colorType}
                  color={colorType as ParticleColor}
                  label={colorType}
                  checked
                />
              ))}
            </Box>
            <Box display='flex' gap={8} flexWrap='wrap'>
              <>
                {Object.keys(ColorPickerType).map((colorType) => (
                  <Radio
                    key={colorType}
                    color={colorType as ParticleColor}
                    option={{ label: colorType, value: colorType }}
                    selectedValue={colorType}
                  />
                ))}
              </>
            </Box>
          </Box>
        </div>
      </ParticleProvider>
    </Box>
  );
}
