import React from 'react';
import { H1Styled } from './h1.style';

export const H1: React.FC = (props) => {
  return <H1Styled>{props.children}</H1Styled>;
};

H1.displayName = 'H1Styled';
