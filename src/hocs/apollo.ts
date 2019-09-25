import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import fetch from 'isomorphic-unfetch';
import withApollo from 'next-with-apollo';
import Cookie, { Cookies } from 'services/cookie';

export default withApollo(({ ctx, initialState }) => {
  if (ctx && ctx.req && ctx.req.headers && ctx.req.headers.cookie) {
    Cookie.init(ctx.req.headers.cookie);
  }

  const headers: any = {};
  const JWT_TOKEN = Cookie.getClient().get(Cookies.JWT);
  if (JWT_TOKEN) {
    headers.authorization = `Bearer ${JWT_TOKEN}`;
  }

  return new ApolloClient({
    link: new HttpLink({
      uri: `${process.env.API_ENDPOINT}`,
      fetch,
      headers,
    }),
    cache: new InMemoryCache().restore(initialState),
  });
});
