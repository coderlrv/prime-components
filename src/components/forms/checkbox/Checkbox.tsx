import { Checkbox, CheckboxProps } from 'primereact/checkbox';
import { classNames } from 'primereact/utils';

import React, {
  forwardRef,
} from 'react';

export type InputClasses = {
  group?: string;
  input?: string;
  label?: string;
}

export type InputCheckboxProps = {
  id?: string;
  name: string;
  classes?: InputClasses;
  error?: string;
  description?: string;
  helpDescription?: string;
  onChange: (value: any) => void;
} & Omit<CheckboxProps, 'onChange' | 'checked'>;

const InputCheckbox = forwardRef<Checkbox, InputCheckboxProps>(
  (
    {
      id,
      name,
      classes,
      placeholder,
      error,
      value,
      onChange,
      onBlur,
      ...props
    },
    ref
  ) => {

    return (
      <div className={classNames(['mb-3', classes?.group, error ? 'p-error' : ''])}>
        <Checkbox
          id={id}
          name={name}
          ref={ref}
          placeholder={placeholder}
          className={classNames(['form-check-input', error ? 'is-invalid' : ''])}
          checked={value || false}
          onChange={(e) => {
            onChange(e.checked)
          }}
          onBlur={onBlur}
          {...props}
        />
        <label className={classNames(['form-check-label font-medium mb-1', error ? 'is-invalid' : ''])}>
          {props.description && <span dangerouslySetInnerHTML={{ __html: props.description }}></span>}
          {props.helpDescription &&
            <i className="fa fa-question-circle" title={props.helpDescription}></i>
          }
        </label>

        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    );
  }
);

InputCheckbox.displayName = 'Checkbox';

export default InputCheckbox;
