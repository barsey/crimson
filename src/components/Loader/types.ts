import { DefaultParticleProps, ParticleSize } from '../types';

export type LoaderSize = ParticleSize | 'extraSmall';

export type LoaderComponentProps = Omit<DefaultParticleProps, 'size'> & {
  size?: LoaderSize;
  'data-testid'?: string;
};

export type LoaderComponent = React.ForwardRefExoticComponent<
  React.HTMLAttributes<HTMLSpanElement> &
    LoaderComponentProps &
    React.RefAttributes<HTMLSpanElement>
>;

export type LoadersRecord = Partial<
  Record<'spinner' | 'dots', LoaderComponent>
>;
