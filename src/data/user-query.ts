import { gql } from '@apollo/client';
import { UserData } from './login-mutation';

export const USER_INFO_QUERY = gql`
  query User($id: ID!) {
    user(id: $id) {
      id
      email
      name
      phone
      role
      phone
    }
  }
`;

export interface UserInfoData {
  user: UserData;
}
