import { useQuery } from '@apollo/client';
import React from 'react';
import { Cell } from '../components/cell';
import { UsersListData, USERS_QUERY } from '../data/users-query';

export const UserList: React.FC = () => {
  const token = localStorage.getItem('token');
  const { data, error } = useQuery<UsersListData>(USERS_QUERY, {
    context: {
      headers: {
        Authorization: token,
      },
    },
    variables: {
      offset: 0,
      limit: 10,
    },
  });

  const list = data?.users.nodes.map((user) => (
    <Cell key={user.id}>
      <p>
        {user.name} : {user.email}
      </p>
    </Cell>
  ));

  return (
    <div>
      {error && <span style={{ color: 'red' }}>{error.message}</span>}
      {list}
    </div>
  );
};
