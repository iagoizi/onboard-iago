import { gql } from '@apollo/client';

export const ADD_USER_MUTATION = gql`
  mutation AddUser($data: UserInputType!) {
    createUser(data: $data) {
      id
      email
      name
      phone
      role
      phone
    }
  }
`;

export interface UserInputType {
  name?: string;
  email?: string;
  password?: string;
  birthDate?: string;
  role?: 'user' | 'admin';
  phone?: string;
}
