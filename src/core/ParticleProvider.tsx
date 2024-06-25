import { ThemeProvider, Global } from '@emotion/react';
import { useEffect, useState } from 'react';
import { DEFAULT_THEME } from '../theming/theme';
import React from 'react';
import { ParticleColorTheme } from './theme.types';
import { ParticleContext } from './ParticleContext';
import { globalStyles } from './globalStyles';
import { InternalSnack } from '../components/Snackbar/types';
import { SnackbarProvider } from '../components/Snackbar/SnackbarProvider';
import { createTheme } from '@/theming/createTheme';

export type ParticleProviderProps = {
  children: React.ReactNode;
  theme?: ParticleColorTheme;
};

export function ParticleProvider(props: ParticleProviderProps) {
  const { children, theme } = props;
  const [currentTheme, setCurrentTheme] = useState(DEFAULT_THEME);
  const [notifications, setNotifications] = useState<InternalSnack[]>([]);

  useEffect(() => {
    if (theme) {
      const newTheme = createTheme(theme);
      setCurrentTheme(newTheme);
    }
  }, [theme]);

  return (
    <ParticleContext.Provider
      value={{
        theme: currentTheme,
      }}
    >
      <Global styles={globalStyles} />
      <ThemeProvider theme={currentTheme}>
        <SnackbarProvider
          snacks={notifications}
          updateSnacks={setNotifications}
        >
          {children}
        </SnackbarProvider>
      </ThemeProvider>
    </ParticleContext.Provider>
  );
}
