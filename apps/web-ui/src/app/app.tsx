import { ThemeProvider } from '@chakra-ui/core';
import { CSSReset } from '@chakra-ui/core/dist';
import React from 'react';
import AuthenticatedApolloProvider from './gql/AuthenticatedApolloProvider';
import IndexRouter from './router/IndexRouter';
import AuthProvider from './states/auth/AuthProvider';
export const App = () => {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./app.@emotion/styled file.
   */
  return (
    <AuthProvider>
      <AuthenticatedApolloProvider>
        <ThemeProvider>
          <CSSReset />
          <IndexRouter />
        </ThemeProvider>
      </AuthenticatedApolloProvider>
    </AuthProvider>
  );
};

export default App;
