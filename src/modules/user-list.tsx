import React from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Button } from '../components/button/button';
import { Cell } from '../components/cell/cell';
import { ErrorMessage } from '../components/error-message/error-message';
import { UsersListData, USERS_QUERY } from '../data/users-query';
import { useAuthQuery } from '../hooks/use-auth-query';
import { PAGE_SIZE } from '../utils/consts';
import { ADD_USER_PATH, USERS_PATH, USER_INFO_PATH } from '../utils/routes';

interface UserListParams {
  page?: string;
}

export const UserList: React.FC = () => {
  const { page } = useParams<UserListParams>();
  const history = useHistory();
  const pageNumber = parseInt(page ?? '0');
  const { data, error } = useAuthQuery<UsersListData>(USERS_QUERY, {
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
    <Link key={user.id} to={`${USER_INFO_PATH}/${user.id}`}>
      <Cell>
        <p>{`${user.name} : ${user.email}`}</p>
      </Cell>
    </Link>
  ));

  return (
    <div>
      <ErrorMessage>{error?.message}</ErrorMessage>
      {list}
      <Button onClick={loadPrevious} disabled={!data?.users.pageInfo.hasPreviousPage}>
        Previous
      </Button>
      <Button onClick={loadNext} disabled={!data?.users.pageInfo.hasNextPage}>
        Next
      </Button>
      <Button onClick={goToAddUser}>Add User</Button>
    </div>
  );
};
