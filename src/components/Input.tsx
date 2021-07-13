import React from 'react';

interface InputProps {
  type: string;
  name: string;
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeHolder?: string;
}

export const Input: React.FC<InputProps> = (props) => {
  return (
    <>
      <label htmlFor={props.name}>{props.label}</label>
      <input type={props.type} name={props.name} onChange={props.onChange} placeholder={props.placeHolder} />
    </>
  );
};

Input.displayName = 'Input';
