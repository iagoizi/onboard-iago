import { gql } from '@apollo/client';

export const USERS_QUERY = gql`
  query Users($pageInfo: PageInputType) {
    users(pageInfo: $pageInfo) {
      nodes {
        id
        name
        email
      }
      count
      pageInfo {
        offset
        limit
        hasNextPage
        hasPreviousPage
      }
    }
  }
`;

export interface User {
  id: any;
  name: string;
  email: string;
}

export interface PageInfo {
  offSet: number;
  limit: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface UsersListData {
  users: {
    nodes: User[];
    count: number;
    pageInfo: PageInfo;
  };
}
