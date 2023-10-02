import React, { FocusEventHandler, forwardRef, useMemo } from 'react';
import { classNames } from 'primereact/utils';

export type InputClasses = {
  group?: string;
  input?: string;
  label?: string;
}

export type SelectProps = {
  id?: string;
  label: string;
  classes?: InputClasses;
  error?: string;
  getOptionLabel?: (option: any) => string;
  getOptionValue?: (option: any) => any;
  placeholder?: string;
  onChange: (value: any) => void;
  value: any;
  isMulti?: boolean;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  isLoading: boolean,
  options: any[]
};

const defaultLabel = (option: any) => `${option.id} - ${option.nome}`;
const defaultOValue = (option: any) => option?.id;

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      id,
      label,
      classes,
      placeholder,
      error,
      isLoading,
      options,
      ...props
    },
    ref
  ) => {
    const customStyles = {
      control: (provided: any) => ({
        ...provided,
        minHeight: 34,
        borderColor: error ? '#dd4b39' : '#ddd',
        boxShadow: 'none',
        '&:hover': {
          borderColor: 'none !important',
          boxShadow: 'none !important'
        },
        '&:focus': {
          borderColor: '#3c8dbc'
        }
      }),
    };

    const optionsValue = props.getOptionValue ? props.getOptionValue : defaultOValue;

    const value = useMemo(() => {
      if (props.isMulti) {
        return options.filter(option => props.value.includes(optionsValue(option)));
      }

      return options.find((option) => optionsValue(option) === props.value) || null;
    }, [options, props.value, props.isMulti, optionsValue]);

    return (
      <div className={classNames(['mb-3', classes?.group, error ? 'has-error' : ''])}>
        <label className={classes?.label}>{label}</label>
        
        
        {/* <ReactSelect
          id={id}
          className={error ? 'is-invalid' : ''}
          placeholder={placeholder || 'Selecione'}
          isClearable
          isMulti={props.isMulti}
          styles={customStyles}
          onChange={(value: any) => props.onChange(optionsValue(value))}
          onBlur={props.onBlur}
          getOptionValue={optionsValue}
          getOptionLabel={props.getOptionLabel ? props.getOptionLabel : defaultLabel}
          value={value}
          isLoading={isLoading}
          options={options}
        /> */}

        {error && <div className='invalid-feedback'>{error}</div>}
      </div>
    );
  }
);

Select.displayName = 'Select';

export default Select;
