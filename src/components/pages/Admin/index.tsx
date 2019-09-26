import React from 'react';
import { NextContext } from 'next';
import Router from 'next/router';
import { ServerResponse } from 'http';
import Layout from 'components/Layout';

const Admin = () => {
  return (
    <Layout.Modal>
      <h2>Redirecting...</h2>
      <p>You&apos;re being redirected to the dashboard.</p>
    </Layout.Modal>
  );
};

Admin.getInitialProps = async (ctx: NextContext) => {
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
