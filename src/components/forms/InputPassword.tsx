import { Password, PasswordProps } from 'primereact/password';
import { classNames } from 'primereact/utils';
import React, {
  forwardRef,
} from 'react';

export type PasswordClasses = {
  group?: string;
  input?: string;
  label?: string;
}

export type InputPasswordProps = {
  id?: string;
  name: string;
  label: string;
  classes?: PasswordClasses;
  error?: string;
  value?: string | null;
} & Omit<PasswordProps, 'value'>;

const InputPassword = forwardRef<PasswordProps, InputPasswordProps>(
  (
    {
      id,
      name,
      label,
      classes,
      placeholder,
      error,
      value,
      ...props
    },
    ref
  ) => {
    return (
      <div className={classNames('flex flex-column mb-3', classes?.group, { 'p-error': error })}>
        <label
          htmlFor={name}
          className={classNames('font-medium mb-1', classes?.label, { 'p-invalid': !!error })}>{label}</label>

        <Password
          inputId={id}
          name={name}
          aria-label={label}
          placeholder={placeholder}
          inputStyle={props.style}
          inputClassName={classNames('w-full', { 'is-invalid': error }, classes?.input)}
          value={value || undefined}
          onChange={props.onChange}
          onBlur={props.onBlur}
          feedback={props.feedback}
        />

        {error && <div className="p-invalid">{error}</div>}
      </div>
    );
  }
);

InputPassword.displayName = 'InputPassword';

export { InputPassword };
