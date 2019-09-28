import React from 'react';
import Layout from 'components/Layout';
import withAuth, { AuthProps } from 'hocs/withAuth';
import Header from 'components/Admin/Header';
import { backgroundColor } from './styles';

const Settings = (props: AuthProps) => {
  return (
    <Layout backgroundColor={backgroundColor}>
      <Header {...props} active="settings" />
      <Layout.Content>
        <h1>Settings</h1>
      </Layout.Content>
    </Layout>
  );
};

export default withAuth(Settings);
