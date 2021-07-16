import React from 'react';
import { USERS } from '../assets/fake-data';
import { Cell } from '../components/cell';

export const UserList: React.FC = () => {
  const list = USERS.map((user) => (
    <Cell key={user.email}>
      <p>
        {user.name} : {user.email}
      </p>
    </Cell>
  ));

  return <h1>{list}</h1>;
};
