import React, { useEffect, useMemo, useState } from 'react';
import { useRateLimitLazyQuery } from '../../../generated/github.graphql';
import client, { ApolloClientFactory } from '../../gql/ApolloClient';
import useToken from '../../states/auth/hooks/useToken';
import EnterTokenForm from './component/EnterTokenForm';
import { NetworkStatus } from 'apollo-client';

/* eslint-disable-next-line */
export interface EnterTokenProps {}

export const EnterToken = (props: EnterTokenProps) => {
  const [value, setValue] = useState<string>('');

  const { setToken } = useToken();

  const memoizedClient = useMemo(
    () => (value ? ApolloClientFactory(value) : client),
    [value]
  );

  const [
    getRateLimit,
    { data, loading, called, error, networkStatus }
  ] = useRateLimitLazyQuery({
    client: memoizedClient
  });

  useEffect(() => {
    if (value) {
      getRateLimit();
    }
  }, [value, memoizedClient, getRateLimit]);

  const isValid = useMemo(() => {
    if (
      networkStatus === NetworkStatus.error ||
      loading ||
      !called ||
      error ||
      !value
    ) {
      return false;
    }
    return true;
  }, [value, error, called, loading, networkStatus]);

  useEffect(() => {
    if (networkStatus === NetworkStatus.error) {
      return;
    }
    if (!loading && called && !error) {
      setToken(value);
    }
  }, [data, setToken, value, error, called, loading, networkStatus]);

  return (
    <EnterTokenForm
      validate={setValue}
      isValid={isValid}
      value={value}
      setToken={setToken}
    />
  );
};

export default EnterToken;
