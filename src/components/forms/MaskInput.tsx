import { classNames } from 'primereact/utils';
import React from 'react';

export type InputClasses = {
  group?: string;
  input?: string;
  label?: string;
}

export type InputMaskProps = {
  id?: string;
  name: string;
  label: string;
  classes?: InputClasses;
  error?: string;
  mask: 'CPF' | 'CNPJ' | 'CPF_CNPJ' | 'PHONE' | string
  onChange: () => void;
  value?: string;
  placeholder?: string;
  onBlur: () => void;
  disabled?: boolean;
};

const InputMask: React.FC<InputMaskProps> = (
  (
    {
      id,
      name,
      label,
      classes,
      error,
      mask,
      onChange,
      value,
      placeholder,
      onBlur,
      disabled
    }
  ) => {

    const getMask = () => {
      if (mask == 'PHONE')
        return (value && value?.length > 6) ? '(99) 99999-9999' : '(99) 9999-9999';

      if (mask == 'CPF_CNPJ')
        return (value && value.length < 15) ? "999.999.999-99" : "99.999.999/0001-99";

      if (mask == 'CPF')
        return "999.999.999-99";

      if (mask == 'CNPJ')
        return "99.999.999/0001-99";

      return mask;
    }

    return (
      <div className={classNames(['mb-3', classes?.group, error ? 'has-error' : ''])}>
        <label
          htmlFor={name}
          className={classNames(classes?.label)}>{label}</label>

        {/* <InputMask 
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          mask={getMask()}
          disabled={disabled}
        /> */}

        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    );
  }
);

export default InputMask;
