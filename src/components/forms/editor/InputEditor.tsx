import { Editor, EditorProps } from "primereact/editor";
import { classNames } from 'primereact/utils';
import React, {
  forwardRef,
} from 'react';

export type InputEditorClasses = {
  group?: string;
  input?: string;
  label?: string;
}

export type InputEditorProps = {
  id?: string;
  name: string;
  label: string;
  classes?: InputEditorClasses;
  error?: string;
  onChange: (value: any) => void;
} & Omit<EditorProps, 'onChange'>;

const InputEditor = forwardRef<InputEditorProps, InputEditorProps>(
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

        <Editor
          id={id}
          name={name}
          aria-label={label}
          placeholder={placeholder}
          value={value}
          className={classNames({ 'is-invalid': error }, classes?.input)}
          onTextChange={(event) => {
            onChange(event.htmlValue);
          }}
          {...props}
        />

        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    );
  }
);

InputEditor.displayName = 'InputEditor';

export { InputEditor };
