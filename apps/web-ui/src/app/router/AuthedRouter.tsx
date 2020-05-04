import React, { Suspense } from 'react';
import {Route, Switch, Redirect} from "react-router-dom";
import PATH from "./routes";
import AUTHED from "./AUTHED.routes";

const AuthedRouter: React.FC = () => {
  return (
    <Suspense fallback={<p>Loading</p>}>
      <Switch>
        <Route
          path="/"
          render={() => (
            <Switch>
              {AUTHED.map(route => {
                return (
                  <Route
                    exact
                    path={route.path}
                    render={() => <route.render />}
                    key={route.path}
                  />
                );
              })}
              <Redirect to={PATH.REPOSITORIES.path} />
            </Switch>
          )}
        />
      </Switch>
    </Suspense>
  )
};
export default AuthedRouter;
