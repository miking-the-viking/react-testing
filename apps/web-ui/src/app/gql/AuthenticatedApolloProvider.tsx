import { ApolloProvider } from '@apollo/react-hooks';
import React from 'react';
import useAuthedClient from '../states/auth/hooks/useAuthedClient';

export const AuthenticatedApolloProvider: React.FC = ({ children }) => {
  const client = useAuthedClient();

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default AuthenticatedApolloProvider;
