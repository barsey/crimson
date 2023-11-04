import { ThemeProvider } from '@emotion/react';
import { useEffect, useState } from 'react';
import { defaultTheme } from '../theming/theme';
import React from 'react';
import { ParticleColorTheme } from './theme.types';

export type ParticleProviderProps = {
  children: React.ReactNode;
  theme?: ParticleColorTheme;
};
export default function ParticleProvider({
  children,
  theme,
}: ParticleProviderProps) {
  const [currentTheme, setCurrentTheme] = useState(defaultTheme);

  useEffect(() => {
    if (theme) {
      setCurrentTheme({ ...defaultTheme, ...theme });
    }
  }, [theme]);

  return <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>;
}
