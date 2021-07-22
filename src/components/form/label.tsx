import React from 'react';
import { LabelStyled } from './label.style';

interface LabelProps {
  htmlFor?: string;
}

export const Label: React.FC<LabelProps> = (props) => {
  return <LabelStyled htmlFor={props.htmlFor}>{props.children}</LabelStyled>;
};
