import React from 'react';
import Layout from 'components/Layout';
import withAuth, { AuthProps } from 'hocs/auth';
import Header from 'components/Admin/Header';
import { backgroundColor } from './styles';

const Users = (props: AuthProps) => {
  return (
    <Layout backgroundColor={backgroundColor}>
      <Header {...props} active="users" />
      <Layout.Content>
        <h1>Users</h1>
      </Layout.Content>
    </Layout>
  );
};

export default withAuth(Users);
