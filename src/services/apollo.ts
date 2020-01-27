import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import fetch from 'isomorphic-unfetch';
import Cookie, { Cookies } from 'services/cookie';

const createApolloClient = (initialState = {}, jwtToken?: string) => {
  const JWT_TOKEN = jwtToken || Cookie.get(Cookies.JWT);

  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
      uri: `${process.env.API_ENDPOINT}`,
      fetch,
      headers: JWT_TOKEN ? { authorization: `Bearer ${JWT_TOKEN}` } : {},
    }),
    cache: new InMemoryCache().restore(initialState),
  });
};

class Apollo {
  private client: ApolloClient<any>;

  constructor() {
    this.client = createApolloClient();
  }

  public init(initialState = {}, jwtToken?: string) {
    this.client = createApolloClient(initialState, jwtToken);

    return this.client;
  }

  public getClient() {
    return this.client;
  }
}

export default new Apollo();
