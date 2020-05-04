import { ApolloProvider } from '@apollo/react-common';
import React from 'react';
import { environment } from '../../../environments/environment';
import { ApolloClientFactory } from '../../gql/ApolloClient';
import Repositories from './Repositories';

const SetupRepositories = ({ token }) => (
  <ApolloProvider client={ApolloClientFactory(token)}>
    <Repositories />
  </ApolloProvider>
);

const validToken = environment.GITHUB_API_TOKEN;

describe(' RepositoriesPage', () => {
  it('stubs', () => {
    expect(true).toBeTruthy();
  });
  // xit('immediately invokes getRepositories on render once', () => {});
  // xit('Renders a loading placeholder while waiting for the repositories to load', () => {});
  // xit(`Renders all loaded repositories as RepositoryCard components`, () => {});
  // xit('Shows an error when there was an error loading the Repositories', () => {});
});
