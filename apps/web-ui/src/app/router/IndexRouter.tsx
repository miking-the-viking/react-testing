import React, { useMemo } from 'react';
import { BrowserRouter } from 'react-router-dom';
import useToken from '../states/auth/hooks/useToken';
import AuthedRouter from './AuthedRouter';
import UnauthedRouter from './UnauthedRouter';

/* eslint-disable-next-line */
export interface RouterProps {}

export const IndexRouter = (props: RouterProps) => {
  const { token } = useToken();

  const AuthenticatedRouter = useMemo(
    () => (token ? AuthedRouter : UnauthedRouter),
    [token]
  );

  return (
    <>
      <BrowserRouter>
        <AuthenticatedRouter />
      </BrowserRouter>
    </>
  );
};

export default IndexRouter;
