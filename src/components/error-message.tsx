import React from 'react';

export const ErrorMessage: React.FC = (props) => {
  return <span style={{ color: 'red' }}>{props.children && props.children}</span>;
};
