import { MultiSelect, MultiSelectProps } from 'primereact/multiselect';
import { classNames } from 'primereact/utils';
import React, {
  forwardRef, useMemo,
} from 'react';

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

const defaultValue = (option: any) => option?.id;

const InputMultiSelect = forwardRef<MultiSelectProps, InputMultiSelectProps>(
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
    const optionsValue = props.getOptionValue ? props.getOptionValue : defaultValue;

    const values = props.options?.filter(option => props.value?.includes(optionsValue(option)));

    return (
      <div className={classNames('flex flex-column mb-3', classes?.group, { 'p-error': error })}>
        <label
          htmlFor={name}
          className={classNames(['font-medium mb-1', classes?.label])}>{label}</label>

        <MultiSelect
          id={id}
          name={name}
          aria-label={label}
          placeholder={placeholder}
          value={values}
          optionValue='id'
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
