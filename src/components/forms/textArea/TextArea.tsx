import { classNames } from 'primereact/utils';
import { InputTextarea, InputTextareaProps } from "primereact/inputtextarea";
import React, {
  forwardRef,
} from 'react';

export type TextAreaClasses = {
  group?: string;
  input?: string;
  label?: string;
}

export type TextAreaProps = {
  id?: string;
  name: string;
  label: string;
  classes?: TextAreaClasses;
  error?: string;
  onChange: (value: string) => void;
} & Omit<InputTextareaProps, 'onChange'>;

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      id,
      name,
      label,
      classes,
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

        <InputTextarea
          id={id}
          name={name}
          ref={ref}
          aria-label={label}
          className={classNames({ 'is-invalid': error }, classes?.input)}
          onChange={(event) => {
            onChange(event.target.value);
          }}
          {...props}
        />

        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    );
  }
);

TextArea.displayName = 'TextArea';

export default TextArea;
