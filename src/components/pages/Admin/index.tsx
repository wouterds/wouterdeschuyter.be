import React from 'react';
import Layout from 'components/Layout';
import withAuth, { AuthProps } from 'hocs/auth';
import Header from 'components/Admin/Header';
import { backgroundColor } from './styles';

const Admin = (props: AuthProps) => {
  return (
    <Layout backgroundColor={backgroundColor}>
      <Header {...props} />
      <Layout.Content>Hello world!</Layout.Content>
    </Layout>
  );
};

export default withAuth(Admin);
