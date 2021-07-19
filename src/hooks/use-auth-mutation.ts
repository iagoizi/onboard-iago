import {
  DocumentNode,
  MutationHookOptions,
  MutationTuple,
  OperationVariables,
  TypedDocumentNode,
  useMutation,
} from '@apollo/client';

/*useMutation com autenticação*/
export function useAuthMutation<TData = any, TVariables = OperationVariables>(
  mutation: DocumentNode | TypedDocumentNode<TData, TVariables>,
  options?: MutationHookOptions<TData, TVariables>,
): MutationTuple<TData, TVariables> {
  const token = localStorage.getItem('token');
  return useMutation<TData, TVariables>(mutation, {
    ...options,
    onError: (errorResponse) => {
      console.warn(errorResponse);
    },
    context: {
      headers: {
        Authorization: token,
      },
    },
  });
}
