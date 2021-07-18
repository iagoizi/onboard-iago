import { useQuery } from '@apollo/client';
import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Cell } from '../components/cell';
import { ErrorMessage } from '../components/error-message';
import { UsersListData, USERS_QUERY } from '../data/users-query';
import { PAGE_SIZE } from '../utils/consts';
import { ADD_USER_PATH, USERS_PATH } from '../utils/routes';

interface UserListParams {
  page?: string;
}

export const UserList: React.FC = () => {
  const { page } = useParams<UserListParams>();
  const history = useHistory();
  const token = localStorage.getItem('token');
  const pageNumber = parseInt(page ?? '0');
  const { data, error } = useQuery<UsersListData>(USERS_QUERY, {
    context: {
      headers: {
        Authorization: token,
      },
    },
    variables: {
      pageInfo: {
        offset: pageNumber * PAGE_SIZE,
        limit: PAGE_SIZE,
      },
    },
  });

  const loadNext = () => {
    history.push(`${USERS_PATH}/${pageNumber + 1}`);
  };
  const loadPrevious = () => {
    history.push(`${USERS_PATH}/${pageNumber - 1}`);
  };
  const goToAddUser = () => {
    history.push(`${ADD_USER_PATH}`);
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
      <button onClick={goToAddUser}>Add User</button>
    </div>
  );
};
