import { lazy } from 'react';

const REPOSITORIES = () => ({
  path: '/repositories',
  icon: null,
  render: lazy(() =>
    import(
      /* webpackChunkName: "Repositories"*/ '../pages/Repositories/Repositories'
    )
  ),
  name: 'Repositories'
});
const ENTER_TOKEN = () => ({
  path: '/enter-token',
  icon: null,
  render: lazy(() =>
    import(/* webpackChunkName: "EnterToken"*/ '../pages/EnterToken/EnterToken')
  ),
  name: 'Enter Token'
});

const PATH = {
  REPOSITORIES: REPOSITORIES(),
  ENTER_TOKEN: ENTER_TOKEN()
};

export default PATH;
