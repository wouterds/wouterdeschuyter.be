import ApolloClient from 'apollo-client';
import { NextPageContext as _NextPageContext } from 'next';

declare module 'next' {
  export interface NextPageContext extends _NextPageContext {
    apolloClient: ApolloClient<any>;
  }
}
