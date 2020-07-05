import gql from 'graphql-tag';
import { NextPageContext } from 'next';
import Cookie, { Cookies } from 'services/cookie';
import Network from 'services/network';

const CONSUME_AUTH_REQUEST = gql`
  mutation consomeAuthenticationRequest($token: String!) {
    consomeAuthenticationRequest(token: $token)
  }
`;

const Auth = () => null;

Auth.getInitialProps = async (ctx: NextPageContext) => {
  const { res, query } = ctx;
  const { token } = query;

  Cookie.init(ctx);

  try {
    const { data } = await Network.apollo.mutate({
      mutation: CONSUME_AUTH_REQUEST,
      variables: { token },
    });

    if (data?.consomeAuthenticationRequest) {
      Cookie.set(Cookies.JWT, data?.consomeAuthenticationRequest, {
        ctx,
      });
    }
  } catch {
    return res?.writeHead(302, { Location: `/admin/authenticate` }).end();
  }

  return res?.writeHead(302, { Location: `/admin` }).end();
};

export default Auth;
