import React, { forwardRef } from 'react';
import { InputNumber as Input, InputNumberProps as InputProps } from 'primereact/inputnumber';
import { classNames } from 'primereact/utils';

export type InputNumberClasses = {
  group?: string;
  input?: string;
  label?: string;
}

export type InputNumberProps = {
  id?: string;
  name: string;
  label: string;
  classes?: InputNumberClasses;
  error?: string;
  onChange: (value: number) => void;
} & Omit<InputProps, 'onChange'>;

const InputNumber = forwardRef<InputProps, InputNumberProps>(
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

        <Input
          id={id}
          name={name}
          type={type}
          aria-label={label}
          placeholder={placeholder}
          value={value}
          className={classNames({ 'is-invalid': error }, classes?.input)}
          onValueChange={(event) => onChange(event.value || 0)}
          {...props}
        />

        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    );
  }
);

InputNumber.displayName = 'InputNumber';

export { 
  InputNumber 
};
