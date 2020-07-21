import { HttpLink } from '@apollo/client';
import { InMemoryCache, NormalizedCacheObject } from '@apollo/client/cache';
import { ApolloClient } from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';

import Cookie, { Cookies } from './cookie';

class NetworkService {
  private _apollo: ApolloClient<NormalizedCacheObject>;

  public constructor() {
    this._apollo = this.createApolloClient();
  }

  private createApolloClient = (cache = {}) => {
    const httpLink = new HttpLink({
      uri: process.env.NEXT_PUBLIC_API_URL,
    });

    const authMiddleware = setContext(async (_request, context) => {
      const jwt = Cookie.get(Cookies.JWT);

      const { headers = {} } = context;

      if (jwt) {
        headers['authorization'] = `Bearer ${jwt}`;
      }

      return {
        ...context,
        headers,
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
    this._apollo = this.createApolloClient(cache);

    return this._apollo;
  };

  public get apollo() {
    return this._apollo;
  }
}

const Network = new NetworkService();

export default Network;
