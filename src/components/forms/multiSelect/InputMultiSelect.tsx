import React, { forwardRef } from 'react';
import { MultiSelect, MultiSelectProps } from 'primereact/multiselect';
import { classNames } from 'primereact/utils';

export type InputMultiSelectClasses = {
  group?: string;
  input?: string;
  label?: string;
}

export type InputMultiSelectProps = {
  id?: string;
  name: string;
  label: string;
  classes?: InputMultiSelectClasses;
  error?: string;
  getOptionValue?: (value: any) => void;
  onChange: (value: any) => void;
} & Omit<MultiSelectProps, 'onChange'>;

const InputMultiSelect = forwardRef<MultiSelect, InputMultiSelectProps>(
  (
    {
      id,
      name,
      label,
      classes,
      placeholder,
      error,
      onChange,
      ...props
    },
    ref
  ) => {
    return (
      <div className={classNames('flex flex-column mb-3', classes?.group, { 'p-error': error })}>
        <label
          htmlFor={name}
          className={classNames(['font-medium mb-1', classes?.label])}>{label}</label>

        <MultiSelect
          id={id}
          ref={ref}
          name={name}
          aria-label={label}
          placeholder={placeholder}
          value={props.value}
          className={classNames({ 'is-invalid': error }, classes?.input)}
          onChange={(event) => {
            onChange(event.value)
          }}
          {...props}
        />

        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    );
  }
);

InputMultiSelect.displayName = 'InputMultiSelect';

export {
  InputMultiSelect
};
