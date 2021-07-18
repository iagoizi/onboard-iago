import React from 'react';
import { UserData } from '../data/login-mutation';
import { Cell } from './cell';

export const UserDetailed: React.FC<UserData> = (props) => {
  return (
    <Cell>
      <p>id:{props.id}</p>
      <p>email:{props.email}</p>
      <p>name:{props.name}</p>
      <p>telefone:{props.phone}</p>
      <p>role:{props.role}</p>
    </Cell>
  );
};
