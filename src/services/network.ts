import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import ApolloClient from 'apollo-client';
import { setContext } from 'apollo-link-context';
import { HttpLink } from 'apollo-link-http';
import fetch from 'isomorphic-unfetch';
import Cookie, { Cookies } from 'services/cookie';

class NetworkService {
  private _apollo: ApolloClient<NormalizedCacheObject>;

  public constructor() {
    this._apollo = NetworkService.createApolloClient();
  }

  private static createApolloClient = (cache = {}) => {
    const httpLink = new HttpLink({
      uri: process.env.API_ENDPOINT,
      fetch,
    });

    const authMiddleware = setContext(async (_request, context) => {
      const jwt = Cookie.get(Cookies.JWT); // todo, get from cookie

      if (!jwt) {
        return context;
      }

      const { headers } = context;

      return {
        headers: {
          ...headers,
          authorization: `Bearer ${jwt}`,
        },
      };
    });

    const link = authMiddleware.concat(httpLink);

    return new ApolloClient({
      link,
      cache: new InMemoryCache().restore(cache),
      connectToDevTools: process.env.NODE_ENV !== 'production',
    });
  };

  public init = (cache = {}) => {
    this._apollo = NetworkService.createApolloClient(cache);

    return this._apollo;
  };

  public get apollo() {
    return this._apollo;
  }
}

const Network = new NetworkService();

export default Network;
