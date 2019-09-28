import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import fetch from 'isomorphic-unfetch';
import withApollo from 'next-with-apollo';
import Cookie, { Cookies } from 'services/cookie';

export default withApollo(({ headers, initialState }) => {
  const { cookie } = headers || {};

  if (cookie) {
    Cookie.init(cookie);
  }

  const JWT_TOKEN = Cookie.get(Cookies.JWT);

  return new ApolloClient({
    link: new HttpLink({
      uri: `${process.env.API_ENDPOINT}`,
      fetch,
      headers: JWT_TOKEN ? { authorization: `Bearer ${JWT_TOKEN}` } : {},
    }),
    cache: new InMemoryCache().restore(initialState),
  });
});
