import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';

const createApolloClient = (cache = {}) => {
  const link = new HttpLink({
    uri: process.env.API_URL,
  });

  return new ApolloClient({
    link,
    cache: new InMemoryCache().restore(cache),
    connectToDevTools: process.env.NODE_ENV !== 'production',
  });
};

let apollo: ApolloClient<NormalizedCacheObject> = createApolloClient();

const init = (cache = {}) => {
  apollo = createApolloClient(cache);

  return apollo;
};

const Network = {
  init,
  get apollo() {
    return apollo;
  },
};

export default Network;
