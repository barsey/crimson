import { createContext } from 'react';
import { ParticleTheme } from './theme.types';
import { DEFAULT_THEME } from '../theming/theme';

export type ContextProps = {
  theme: ParticleTheme;
};

const ParticleContext = createContext<ContextProps>({
  theme: DEFAULT_THEME,
});

export { ParticleContext };
