import React from 'react';
import { UserData } from '../../data/login-mutation';
import { Cell } from '../cell/cell';

export interface UserDetailedProps {
  user?: UserData;
}

export const UserDetailed: React.FC<UserDetailedProps> = (props) => {
  return (
    <Cell>
      {props.user && (
        <>
          <p>id:{props.user.id}</p>
          <p>email:{props.user.email}</p>
          <p>name:{props.user.name}</p>
          <p>telefone:{props.user.phone}</p>
          <p>role:{props.user.role}</p>
        </>
      )}
    </Cell>
  );
};
