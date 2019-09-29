import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import fetch from 'isomorphic-unfetch';
import Cookie, { Cookies } from 'services/cookie';

class Apollo {
  private client: ApolloClient<any>;

  constructor() {
    this.client = this.createApolloClient();
  }

  public init(initialState = {}, jwtToken?: string) {
    this.client = this.createApolloClient(initialState, jwtToken);
  }

  public getClient() {
    return this.client;
  }

  private createApolloClient(initialState = {}, jwtToken?: string) {
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
  }
}

export default new Apollo();
