import styled from 'styled-components';

export const ButtonStyled = styled.button`
  font-size: 16px;
  font-weight: normal;
  color: white;
  border: 0px;
  background-image: linear-gradient(160deg, #6d50f2, #b53efa);
  min-height: 44px;
  border-radius: 10px;
  cursor: pointer;
  ::disabled {
    background-color: black;
  }
`;

ButtonStyled.displayName = 'ButtonStyled';
