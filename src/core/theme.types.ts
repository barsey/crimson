export interface ParticleColorTheme {
  colors: {
    primary: string;
    secondary: string;
    success: string;
    info: string;
    warning: string;
    error: string;
  };
}
export interface ParticleTheme extends ParticleColorTheme {
  getContrastText: Function;
}
