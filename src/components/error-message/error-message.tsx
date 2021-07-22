import React from 'react';
import { ErrorStyled } from './error-message.style';

export const ErrorMessage: React.FC = (props) => {
  return <ErrorStyled>{props.children}</ErrorStyled>;
};
