import { useMemo } from 'react';
import client, { ApolloClientFactory } from '../../../gql/ApolloClient';
import useToken from './useToken';

const useAuthedClient = () => {
  const { token } = useToken();

  const memoizedClient = useMemo(
    () => (token ? ApolloClientFactory(token) : client),
    [token]
  );

  return memoizedClient;
};

export default useAuthedClient;
