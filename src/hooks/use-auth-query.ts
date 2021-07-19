import {
  DocumentNode,
  OperationVariables,
  QueryHookOptions,
  QueryResult,
  TypedDocumentNode,
  useQuery,
} from '@apollo/client';

export function useAuthQuery<TData = any, TVariables = OperationVariables>(
  query: DocumentNode | TypedDocumentNode<TData, TVariables>,
  options?: QueryHookOptions<TData, TVariables>,
): QueryResult<TData, TVariables> {
  const token = localStorage.getItem('token');
  return useQuery<TData, TVariables>(query, {
    ...options,
    context: {
      headers: {
        Authorization: token,
      },
    },
  });
}
