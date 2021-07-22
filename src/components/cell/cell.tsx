import React from 'react';
import { CellStyled } from './cell.style';

interface CellProps {
  justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
  direction?: 'column' | 'row';
}

export const Cell: React.FC<CellProps> = (props) => {
  return (
    <CellStyled justify={props.justify} direction={props.direction}>
      {props.children}
    </CellStyled>
  );
};
