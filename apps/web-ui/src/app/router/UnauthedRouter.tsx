import React, { Suspense, useMemo } from 'react';
import {Route, Switch, Redirect} from "react-router-dom";
import PATH from "./routes";
import UNAUTHED from "./UNAUTHED.routes";

const UnauthedRouter: React.FC = () => {
    return (
      <Suspense fallback={<p>Loading</p>}>
        <Switch>
          <Route
            path="/"
            render={() => (
              <Switch>
                {UNAUTHED.map(route => {
                  return (
                    <Route
                      exact
                      path={route.path}
                      render={() => <route.render />}
                      key={route.path}
                    />
                  );
                })}
                <Redirect to={PATH.ENTER_TOKEN.path} />
              </Switch>
            )}
          />
        </Switch>
      </Suspense>
    )
};

export default UnauthedRouter;
