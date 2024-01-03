import { createContext } from 'react';
import { ParticleTheme } from './theme.types';
import { defaultTheme } from '../theming/theme';

export type ContextProps = {
  theme: ParticleTheme;
};

const ParticleContext = createContext<ContextProps>({
  theme: defaultTheme,
});

export default ParticleContext;
