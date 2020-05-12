import { ThemeProvider } from '@chakra-ui/core';
import React from 'react';
import { AuthContextProps, AuthContext } from '../../states/auth/AuthContext';
import { fireEvent, render, act } from '@testing-library/react';
import { environment } from '../../../environments/environment';
import EnterToken from './EnterToken';
import copy from './component/EnterTokenForm.copy';

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

describe(' EnterToken e2e', () => {
  xit('can submit a token', async resolve => {
    const tokenValue = environment.GITHUB_API_TOKEN;
    const setToken = jest.fn(token => {
      expect(token).toEqual(tokenValue);
      resolve();
    });

    const { getByLabelText } = render(<SetupWithContext setToken={setToken} />);

    act(() => {
      const input = getByLabelText(copy.input.label);
      fireEvent.change(input, { target: { value: tokenValue } });
    });

    act(() => {
      const button = getByLabelText(copy.submit.text);
      fireEvent.click(button);
    });
  });
});
