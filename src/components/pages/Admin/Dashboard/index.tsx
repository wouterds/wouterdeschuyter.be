import React from 'react';
import Layout from 'components/Layout';
import withAuth, { AuthProps } from 'hocs/withAuth';
import Header from 'components/Admin/Header';
import { backgroundColor, Content } from './styles';

const Admin = (props: AuthProps) => {
  return (
    <Layout backgroundColor={backgroundColor}>
      <Header {...props} active="dashboard" />
      <Layout.Content>
        <Content>
          <h1>Dashboard</h1>
        </Content>
      </Layout.Content>
    </Layout>
  );
};

export default withAuth(Admin);
