import styled from 'styled-components';

interface CellStyledProps {
  justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
  direction?: 'column' | 'row';
}

export const CellStyled = styled.div<CellStyledProps>`
  display: flex;
  ${(props) => (props.justify ? `justify-content: ${props.justify};` : '')}
  ${(props) => (props.direction ? `flex-direction: ${props.direction};` : '')}
`;
