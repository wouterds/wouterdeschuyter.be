import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import fetch from 'isomorphic-unfetch';
import withApollo from 'next-with-apollo';

export default withApollo(
  ({ initialState }) =>
    new ApolloClient({
      link: new HttpLink({
        uri: `${process.env.API_ENDPOINT}`,
        fetch,
      }),
      cache: new InMemoryCache().restore(initialState),
    }),
);
