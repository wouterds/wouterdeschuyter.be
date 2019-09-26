import React from 'react';
import Layout from 'components/Layout';
import withAuth, { AuthProps } from 'hocs/auth';
import Header from 'components/Admin/Header';
import { backgroundColor } from './styles';

const Media = (props: AuthProps) => {
  return (
    <Layout backgroundColor={backgroundColor}>
      <Header {...props} active="media" />
      <Layout.Content>
        <h1>Media</h1>
      </Layout.Content>
    </Layout>
  );
};

export default withAuth(Media);
