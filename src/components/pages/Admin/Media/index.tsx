import React from 'react';
import Layout from 'components/Layout';
import withAuth, { AuthProps } from 'hocs/withAuth';
import Header from 'components/Admin/Header';
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
