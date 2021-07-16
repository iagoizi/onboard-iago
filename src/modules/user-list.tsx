import { useQuery } from '@apollo/client';
import React from 'react';
import { Cell } from '../components/cell';
import { ErrorMessage } from '../components/error-message';
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

  const loadNext = () => {
    console.log('Próxima');
  };
  const loadPrevious = () => {
    console.log('Anterior');
  };

  const list = data?.users.nodes.map((user) => (
    <Cell key={user.id}>
      <p>{`${user.name} : ${user.email}`}</p>
    </Cell>
  ));

  return (
    <div>
      <ErrorMessage>{error?.message}</ErrorMessage>
      {error && <span style={{ color: 'red' }}>{error.message}</span>}
      {list}
      <button onClick={loadPrevious} disabled={!data?.users.pageInfo.hasPreviousPage}>
        Previous
      </button>
      <button onClick={loadNext} disabled={!data?.users.pageInfo.hasNextPage}>
        Next
      </button>
    </div>
  );
};
