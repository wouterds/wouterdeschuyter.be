import Header from 'components/Admin/Header';
import Layout from 'components/Layout';
import withAuth, { AuthProps } from 'hocs/withAuth';
import React from 'react';

import { backgroundColor, Content } from './styles';

const Media = (props: AuthProps) => {
  return (
    <Layout backgroundColor={backgroundColor}>
      <Header {...props} active="media" />
      <Layout.Content>
        <Content>
          <h1>Media</h1>
        </Content>
      </Layout.Content>
    </Layout>
  );
};

export default withAuth(Media);
