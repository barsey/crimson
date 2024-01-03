import { ThemeProvider } from '@emotion/react';
import { useEffect, useState } from 'react';
import { defaultTheme } from '../theming/theme';
import React from 'react';
import { ParticleColorTheme } from './theme.types';
import ParticleContext from './ParticleContext';
import { InternalSnack } from '../components/Snackbar/types';

import { SnackbarProvider } from '../components/Snackbar/SnackbarProvider';

export type ParticleProviderProps = {
  children: React.ReactNode;
  theme?: ParticleColorTheme;
};

export default function ParticleProvider(props: ParticleProviderProps) {
  const { children, theme } = props;
  const [currentTheme, setCurrentTheme] = useState(defaultTheme);
  const [notifications, setNotifications] = useState<InternalSnack[]>([]);

  useEffect(() => {
    if (theme) {
      setCurrentTheme({ ...defaultTheme, ...theme });
    }
  }, [theme]);

  return (
    <ParticleContext.Provider
      value={{
        theme: currentTheme,
      }}
    >
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
