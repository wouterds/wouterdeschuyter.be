import Layout from 'components/Layout';
import { ServerResponse } from 'http';
import { NextPageContext } from 'next';
import Router from 'next/router';
import React from 'react';

const Admin = () => {
  return (
    <Layout.Modal>
      <h2>Redirecting...</h2>
      <p>You&apos;re being redirected to the dashboard.</p>
    </Layout.Modal>
  );
};

Admin.getInitialProps = async (ctx: NextPageContext) => {
  const route = '/admin/dashboard';
  if (ctx.res) {
    (ctx.res as ServerResponse).writeHead(302, {
      Location: route,
    });
    (ctx.res as ServerResponse).end();
  } else {
    Router.push(route);
  }
};

export default Admin;
