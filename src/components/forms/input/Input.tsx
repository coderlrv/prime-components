import React, {
  forwardRef,
} from 'react';
import { InputText, InputTextProps } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';

export type InputType = 'text' | 'email' | 'password' | 'date';

export type InputClasses = {
  group?: string;
  input?: string;
  label?: string;
}

export type InputProps = {
  id?: string;
  name: string;
  label: string;
  type?: InputType;
  classes?: InputClasses;
  error?: string;
  value?: string | null;
  onChange: (value: string | null) => void;
} & Omit<InputTextProps, 'onChange' | 'value'>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      name,
      label,
      type = 'text',
      classes,
      placeholder,
      error,
      onChange,
      value,
      ...props
    },
    ref
  ) => {
    return (
      <div className={classNames('flex flex-column mb-3', classes?.group, { 'p-error': error })}>
        <label
          htmlFor={name}
          className={classNames(['font-medium mb-1', classes?.label])}>{label}</label>

        <InputText
          id={id}
          ref={ref}
          name={name}
          type={type}
          aria-label={label}
          placeholder={placeholder}
          value={value || undefined}
          className={classNames({ 'is-invalid': error }, classes?.input)}
          onChange={(event) => onChange(event.target.value)}
          {...props}
        />

        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
