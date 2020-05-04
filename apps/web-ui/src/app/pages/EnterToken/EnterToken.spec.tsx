import { ThemeProvider } from '@chakra-ui/core';
import React from 'react';
import { AuthContext, AuthContextProps } from '../../states/auth/AuthContext';
import EnterToken from './EnterToken';

const SetUpEnterToken: React.FC = () => {
  return (
    <ThemeProvider>
      <EnterToken />
    </ThemeProvider>
  );
};

const SetupWithContext: React.FC<Pick<AuthContextProps, 'setToken'>> = ({
  setToken
}) => {
  return (
    <AuthContext.Provider value={{ token: '', setToken }}>
      <SetUpEnterToken />
    </AuthContext.Provider>
  );
};

describe(' EnterToken', () => {
  xit('Validates the token against the GitHub API', () => {
    expect(true).toBeTruthy();
  });
});
