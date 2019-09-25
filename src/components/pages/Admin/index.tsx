import React from 'react';
import Layout from 'components/Layout';
import withAuth from 'hocs/auth';

interface Props {
  jwt: string;
}

const Admin = (props: Props) => {
  console.log({ props });

  return (
    <Layout.Modal>
      <h2>Admin</h2>
    </Layout.Modal>
  );
};

export default withAuth(Admin);
