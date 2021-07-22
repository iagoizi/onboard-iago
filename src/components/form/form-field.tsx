import React from 'react';
import { Cell } from '../cell/cell';
import { Input } from './input';
import { Label } from './label';

interface FormFieldProps {
  type: string;
  name: string;
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeHolder?: string;
  title?: string;
  pattern?: string;
  required?: boolean;
}

export const FormField: React.FC<FormFieldProps> = (props) => {
  return (
    <Cell direction='column'>
      <Label htmlFor={props.name}>{props.label}</Label>
      <Input
        type={props.type}
        name={props.name}
        onChange={props.onChange}
        placeHolder={props.placeHolder}
        title={props.title}
        pattern={props.pattern}
        required={props.required}
      >
        {props.children}
      </Input>
    </Cell>
  );
};

FormField.displayName = 'FormField';
