import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import ParticleProvider from '../core/ParticleProvider';

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <ParticleProvider>{children}</ParticleProvider>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
