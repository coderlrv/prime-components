import { classNames } from 'primereact/utils';
import React, {
  forwardRef,
} from 'react';


export type InputFileClasses = {
  group?: string;
  input?: string;
  label?: string;
}

export type InputFileProps = {
  id?: string;
  name: string;
  label: string;
  classes?: InputFileClasses;
  error?: string;
} & React.HTMLProps<HTMLInputElement>;

const InputFile = forwardRef<HTMLInputElement, InputFileProps>(
  (
    {
      id,
      name,
      label,
      classes,
      placeholder,
      error,
      ...props
    },
    ref
  ) => {
    return (
      <div className={classNames(['flex flex-column mb-3', classes?.group , error ? 'p-error' : '' ])}>
        <label
          htmlFor={name}
          className={classNames(['font-medium mb-1',classes?.label])}>{label}</label>
        <input
          id={id}
          ref={ref}
          name={name}
          type={'file'}
          aria-label={label}
          placeholder={placeholder}
          className={classNames(['form-control', error ? 'is-invalid' : '' ])}
          {...props}
        />

        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    );
  }
);

InputFile.displayName = 'InputFile';

export {
  InputFile
};

