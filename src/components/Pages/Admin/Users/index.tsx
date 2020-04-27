import { useQuery } from '@apollo/react-hooks';
import Header from 'components/Admin/Header';
import Layout from 'components/Layout';
import { format } from 'date-fns';
import gql from 'graphql-tag';
import withAuth, { AuthProps } from 'hocs/withAuth';
import React from 'react';

import { backgroundColor, Content } from './styles';

const FETCH_DATA = gql`
  query fetchData {
    users {
      id
      firstName
      lastName
      email
      status
      createdAt
      lastOnlineAt
    }
  }
`;

const Users = (props: AuthProps) => {
  const { loading, data } = useQuery(FETCH_DATA);

  return (
    <Layout backgroundColor={backgroundColor}>
      <Header {...props} active="users" />
      <Layout.Content>
        <Content>
          <h1>Users</h1>
          {loading && <p>Loading...</p>}
          {!loading && (
            <table>
              <thead>
                <tr>
                  <th>Identifier</th>
                  <th>First name</th>
                  <th>Last name</th>
                  <th>Email</th>
                  <th>Status</th>
                  <th>Last online at</th>
                  <th>Created at</th>
                </tr>
              </thead>
              <tbody>
                {data.users.map((user: any, index: number) => (
                  <tr key={index}>
                    <td className="long id">{user.id}</td>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.email}</td>
                    <td
                      style={{
                        color: user.status === 'ACTIVE' ? '#2ecc71' : '#e74c3c',
                      }}
                    >
                      {user.status === 'ACTIVE' && 'Active'}
                      {user.status === 'DELETED' && 'Deleted'}
                      {user.status === 'NOT_ACTIVATED' && 'Not activated'}
                    </td>
                    <td>
                      {user.lastOnlineAt
                        ? format(
                            new Date(parseInt(user.lastOnlineAt)),
                            'MMMM do yyyy, HH:mm',
                          )
                        : '--'}
                    </td>
                    <td>
                      {format(
                        new Date(parseInt(user.createdAt)),
                        'MMMM do yyyy, HH:mm',
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </Content>
      </Layout.Content>
    </Layout>
  );
};

export default withAuth(Users);
