import { DefaultParticleProps, OptionType } from '../types';

export type SelectKeyValue = OptionType | string;

export type DefaultSelectProps = DefaultParticleProps & {
  placeholder?: string;
  options: SelectKeyValue[];
  searchable?: boolean;
  label?: string;
  clearable?: boolean;
  fullWidth?: boolean;
  errorText?: string;
  required?: boolean;
};

export type BaseSelectProps = DefaultSelectProps & {
  onChange: (value: SelectKeyValue[]) => void;
  value: SelectKeyValue[];
  multiple?: boolean;
};
