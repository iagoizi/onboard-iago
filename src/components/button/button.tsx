import React from 'react';
import { ButtonStyled } from './button.style';

export interface ButtonProps {
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <ButtonStyled disabled={props.disabled} onClick={props.onClick}>
      {props.children}
    </ButtonStyled>
  );
};
