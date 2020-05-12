import { render } from '@testing-library/react';
import React from 'react';
import { AuthContext } from '../states/auth/AuthContext';
import IndexRouter from './IndexRouter';

jest.mock('./UnauthedRouter', () => () => (
  <div data-testid="fake-unauthed-router"></div>
));
jest.mock('./AuthedRouter', () => () => (
  <div data-testid="fake-authed-router"></div>
));

interface SetupIndexRouterTestsProps {
  token?: string;
}
const SetupIndexRouterTests: React.FC<SetupIndexRouterTestsProps> = ({
  token
}) => {
  return (
    <AuthContext.Provider
      value={{
        token,
        setToken: () => {
          /** */
        }
      }}
    >
      <IndexRouter />
    </AuthContext.Provider>
  );
};

describe(' IndexRouter', () => {
  it('should render unauthed router when there is no token', () => {
    const { container, getByTestId } = render(<SetupIndexRouterTests />);
    getByTestId('fake-unauthed-router');
  });

  it('should render authed router when there is a token', () => {
    const { container, getByTestId } = render(
      <SetupIndexRouterTests token="A Sweet Sweet Token" />
    );
    getByTestId('fake-authed-router');
  });
});
