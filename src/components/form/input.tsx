import React from 'react';
import { InputStyled } from './input.style';

interface InputProps {
  type: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeHolder?: string;
  title?: string;
  pattern?: string;
  required?: boolean;
}

export const Input: React.FC<InputProps> = (props) => {
  return (
    <InputStyled
      type={props.type}
      name={props.name}
      onChange={props.onChange}
      placeholder={props.placeHolder}
      title={props.title}
      pattern={props.pattern}
      required={props.required}
    >
      {props.children}
    </InputStyled>
  );
};
