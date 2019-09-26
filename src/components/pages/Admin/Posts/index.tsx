import React from 'react';
import Layout from 'components/Layout';
import withAuth, { AuthProps } from 'hocs/auth';
import Header from 'components/Admin/Header';
import { backgroundColor } from './styles';

const Posts = (props: AuthProps) => {
  return (
    <Layout backgroundColor={backgroundColor}>
      <Header {...props} active="posts" />
      <Layout.Content>
        <h1>Posts</h1>
      </Layout.Content>
    </Layout>
  );
};

export default withAuth(Posts);
