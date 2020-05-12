import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { setContext } from 'apollo-link-context';
import { createHttpLink } from 'apollo-link-http';
import fetch from 'unfetch';
import { environment } from '../../environments/environment';

const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
  fetch
});

const AuthLinkFactory = (token?: string) =>
  setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    // const token = localStorage.getItem('token');
    // const token = environment.GITHUB_API_TOKEN;
    // console.log('token ', token);
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : ''
      }
    };
  });

export const ApolloClientFactory = (token?: string) =>
  new ApolloClient({
    cache: new InMemoryCache(),
    link: AuthLinkFactory(token).concat(httpLink),
    connectToDevTools: true
  });
const client = ApolloClientFactory();
export default client;
