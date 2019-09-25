import React from 'react';
import Layout from 'components/Layout';
import withAuth, { AuthProps } from 'hocs/auth';

type Props = AuthProps;

const Admin = (props: Props) => {
  console.log({ props });

  return (
    <Layout.Modal>
      <h2>Admin</h2>
    </Layout.Modal>
  );
};

export default withAuth(Admin);
