import { Dropdown, DropdownProps } from 'primereact/dropdown';
import { classNames } from 'primereact/utils';
import React, { forwardRef } from 'react';

export type InputDropdownClasses = {
  group?: string;
  input?: string;
  label?: string;
}

export type InputDropdownProps = {
  id?: string;
  name: string;
  label: string;
  classes?: InputDropdownClasses;
  error?: string;
  onChange: (value: any) => void;
} & Omit<DropdownProps, 'onChange'>;

const InputDropdown = forwardRef<Dropdown, InputDropdownProps>(
  (
    {
      id,
      name,
      label,
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

        <Dropdown
          id={id}
          name={name}
          ref={ref}
          aria-label={label}
          placeholder={placeholder}
          value={value}
          className={classNames({ 'is-invalid': error }, classes?.input)}
          onChange={(event) => {
            onChange(event.value);
          }}
          {...props}
        />

        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    );
  }
);

InputDropdown.displayName = 'InputDropdown';

export {
  InputDropdown
};
