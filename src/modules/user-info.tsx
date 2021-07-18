import React from 'react';
import { useParams } from 'react-router-dom';
import { ErrorMessage } from '../components/error-message/error-message';
import { H1 } from '../components/h1/h1';
import { UserDetailed } from '../components/user-detail/user-detail';
import { UserInfoData, USER_INFO_QUERY } from '../data/user-query';
import { useAuthQuery } from '../hooks/use-auth-query';

interface UserListParams {
  userId?: string;
}

export const UserInfo: React.FC = () => {
  const { userId } = useParams<UserListParams>();
  const { data, error } = useAuthQuery<UserInfoData>(USER_INFO_QUERY, {
    variables: {
      id: userId,
    },
  });
  return (
    <div>
      <H1>Informações do usuário</H1>
      <ErrorMessage>{error?.message}</ErrorMessage>
      <UserDetailed user={data?.user} />
    </div>
  );
};
