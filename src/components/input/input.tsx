import React from 'react';

interface InputProps {
  type: string;
  name: string;
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeHolder?: string;
  title?: string;
  pattern?: string;
  required?: boolean;
}

export const Input: React.FC<InputProps> = (props) => {
  return (
    <>
      <label htmlFor={props.name}>{props.label}</label>
      <input
        type={props.type}
        name={props.name}
        onChange={props.onChange}
        placeholder={props.placeHolder}
        title={props.title}
        pattern={props.pattern}
        required={props.required}
      >
        {props.children}
      </input>
    </>
  );
};

Input.displayName = 'Input';
