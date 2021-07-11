import React from 'react';

interface InputProps {
  type: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeHolder?: string;
}

export const Input: React.FC<InputProps> = (props) => {
  return <input type={props.type} name={props.name} onChange={props.onChange} placeholder={props.placeHolder} />;
};
