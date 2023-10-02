import { classNames } from 'primereact/utils';
import React, {
  forwardRef, useMemo,
} from 'react';

import { Calendar, CalendarProps } from 'primereact/calendar';
import { Nullable } from 'primereact/ts-helpers';
import { addLocale } from 'primereact/api';

import ptbr from './InputDateLanguage.json';
addLocale('pt',ptbr);

export type InputDateClasses = {
  group?: string;
  input?: string;
  label?: string;
}

export type InputDateProps = {
  id?: string;
  name: string;
  label: string;
  classes?: InputDateClasses;
  error?: string;
  onChange: (event: Date | Date[] | string | null | undefined) => void;
} & Omit<CalendarProps, 'onChange'>;

const InputDate = forwardRef<Calendar, InputDateProps>(
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
    const valueDate = useMemo(()=> value ? new Date(value as string) : null ,[ value ])

    return (
      <div className={classNames('flex flex-column mb-3', classes?.group, { 'p-error': error })}>
        <label
          htmlFor={name}
          className={classNames(['font-medium mb-1', classes?.label])}>{label}</label>

        <Calendar
          id={id}
          ref={ref}
          name={name}
          locale='pt'
          aria-label={label}
          placeholder={placeholder}
          value={valueDate}
          className={classNames({ 'is-invalid': error }, classes?.input)}
          onChange={(event) => onChange(event.value)}
          {...props}
        />

        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    );
  }
);

InputDate.displayName = 'InputDate';

export {
  InputDate
};
