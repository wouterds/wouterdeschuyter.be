import Header from 'components/Admin/Header';
import Layout from 'components/Layout';
import withAuth, { AuthProps } from 'hocs/withAuth';
import React from 'react';

import { backgroundColor, Content } from './styles';

const Settings = (props: AuthProps) => {
  return (
    <Layout backgroundColor={backgroundColor}>
      <Header {...props} active="settings" />
      <Layout.Content>
        <Content>
          <h1>Settings</h1>
        </Content>
      </Layout.Content>
    </Layout>
  );
};

export default withAuth(Settings);
