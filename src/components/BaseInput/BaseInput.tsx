import styled from '@emotion/styled';
import { ChangeEvent } from 'react';
import { ParticleSize } from '../types';
import { Typography } from '../Typography';
import { HelperText } from '../HelperText';
import { RequiredIndicator } from '../Indicators';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: left;
  label {
    font-weight: 500;
  }
`;

export type BaseInputProps = {
  label?: string;
  value?: string;
  onChange: (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  ) => void;
  onBlur?: (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  ) => void;
  placeholder?: string;
  errorText?: string;
  size?: ParticleSize;
  disabled?: boolean;
  required?: boolean;
  maxLength?: number;
  style?: React.CSSProperties;
  className?: string;
  containerStyle?: React.CSSProperties;
  containerClassName?: string;
  multiline?: boolean; // Additional prop to differentiate TextArea from BaseInput
  id?: string;
  readOnly?: boolean;
};

export function InputLabel({
  label,
  required = false,
  // multiline = false,
  id,
  htmlFor,
}: {
  label?: string;
  required?: boolean;
  // multiline?: boolean;
  id: string;
  htmlFor: string;
}) {
  return (
    <>
      {label && (
        <Typography htmlFor={htmlFor} id={id} as='label'>
          {label} <RequiredIndicator required={required} />
        </Typography>
      )}
    </>
  );
}
type BaseInputContainerProps = {
  style?: React.CSSProperties;
  className?: string;
  children: React.ReactNode;
  errorText?: string;
  required?: boolean;
  label?: string;
  id: string;
  multiline?: boolean;
};
export function BaseInputContainer(props: BaseInputContainerProps) {
  const {
    style,
    className,
    children,
    errorText,
    label,
    id,
    required,
    // multiline = false,
  } = props;
  return (
    <Container style={style} className={className}>
      <InputLabel
        id={`${id}-label`}
        data-testid={`${id}-label`}
        label={label}
        required={required}
        // multiline={multiline}
        htmlFor={id}
      />
      {children}
      <HelperText>{errorText}</HelperText>
    </Container>
  );
}

// const BaseInput = forwardRef<
//   HTMLInputElement & HTMLTextAreaElement,
//   BaseInputProps
// >(
//   (
//     {
//       value,
//       onChange,
//       placeholder,
//       disabled,
//       errorText,
//       label,
//       size,
//       required,
//       maxLength,
//       style,
//       className,
//       containerClassName,
//       containerStyle,
//       multiline = false, // Default to false for BaseInput
//       ...otherProps
//     },
//     ref,
//   ) => {
//     const error = !!errorText;
//     const id = useId();
//     const Component = StyledInput.withComponent(
//       multiline ? 'textarea' : 'input',
//     );

//     return (
//       <BaseInputContainer style={containerStyle} className={containerClassName}>
//         {label && (
//           <Typography
//             htmlFor={`input-${multiline ? 'textarea' : 'text'}-${id}`}
//             as='label'
//           >
//             {label} {required && '*'}
//           </Typography>
//         )}
//         <Component
//           inputsize={size}
//           value={value}
//           onChange={onChange}
//           placeholder={placeholder}
//           ref={ref}
//           disabled={disabled}
//           className={`${error ? 'error' : ''} ${className}`}
//           id={`input-${multiline ? 'textarea' : 'text'}-${id}`}
//           data-testid={`input-${multiline ? 'textarea' : 'text'}`}
//           maxLength={maxLength}
//           style={style}
//           multiline={multiline}
//           {...otherProps}
//         />
//         <HelperText>{errorText}</HelperText>
//       </BaseInputContainer>
//     );
//   },
// );

// BaseInput.displayName = 'BaseInput';

// export { BaseInput };
