import { gql } from '@apollo/client';

export const LOGIN_MUTATION = gql`
  mutation Login($data: LoginInputType!) {
    login(data: $data) {
      user {
        id
        email
        name
        phone
        role
        phone
      }
      token
    }
  }
`;

export interface UserData {
  name: string;
  email: string;
  role: string;
  phone: string;
  key: any;
}

export interface LoginData {
  login: {
    token: string;
    user: UserData;
  };
}
