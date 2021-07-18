import { useQuery } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router-dom';
import { ErrorMessage } from '../components/error-message';
import { UserDetailed } from '../components/user-detail';
import { UserInfoData, USER_INFO_QUERY } from '../data/user-query';

interface UserListParams {
  userId?: string;
}

export const UserInfo: React.FC = () => {
  const { userId } = useParams<UserListParams>();
  const token = localStorage.getItem('token');
  const { data, error } = useQuery<UserInfoData>(USER_INFO_QUERY, {
    context: {
      headers: {
        Authorization: token,
      },
    },
    variables: {
      id: userId,
    },
  });
  return (
    <div>
      <h1>Informações do usuário</h1>
      <ErrorMessage>{error?.message}</ErrorMessage>
      <UserDetailed user={data?.user} />
    </div>
  );
};
