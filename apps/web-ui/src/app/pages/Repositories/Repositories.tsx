import React, { useEffect } from 'react';
import { useMyFirstRepositoriesLazyQuery } from '../../../generated/github.graphql';

/* eslint-disable-next-line */
export interface RepositoriesPageProps {}

export const Repositories = (props: RepositoriesPageProps) => {
  const [
    getRepositories,
    { data, loading, error }
  ] = useMyFirstRepositoriesLazyQuery();

  useEffect(() => {
    console.log('get repositories');
    getRepositories();
  }, []);

  return <></>;
};

export default Repositories;
