import { ChangeEvent, forwardRef } from 'react';
import { BaseInputProps, StyledInput, BaseInputContainer } from '../BaseInput';

export type TextAreaProps = Omit<
  BaseInputProps,
  'multiline' | 'onChange' | 'size'
> & {
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
};

const Component = StyledInput.withComponent('textarea');

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      errorText,
      label,
      required,
      maxLength,
      style,
      className,
      containerClassName,
      containerStyle,
      id = 'text-area',
      readOnly = false,
      ...otherProps
    },
    ref,
  ) => {
    const error = !!errorText;

    return (
      <BaseInputContainer
        style={containerStyle}
        className={containerClassName}
        id={id}
        label={label}
        required={required}
        multiline
        errorText={errorText}
      >
        <Component
          ref={ref}
          className={`${error ? 'error' : ''} ${className}`}
          id={id}
          data-testid={id}
          maxLength={maxLength}
          style={style}
          multiline
          rows={4}
          readOnly={readOnly}
          aria-readonly={readOnly ? 'true' : undefined}
          {...otherProps}
        />
      </BaseInputContainer>
    );
  },
);

TextArea.displayName = 'TextArea';

export { TextArea };
