import { useQuery } from '@apollo/react-hooks';
import Table from 'components/Table';
import { User } from 'data/user';
import { format as formatDate } from 'date-fns';
import gql from 'graphql-tag';
import md5 from 'md5';
import React from 'react';

import styles from './styles.module.css';

const AdminModuleUsers = () => {
  const { data } = useQuery<{ users: User[] }>(
    gql`
      query {
        users {
          id
          name
          email
          lastOnlineAt
          createdAt
        }
      }
    `,
  );

  return (
    <div className={styles.adminModuleUsers}>
      <Table>
        <table>
          <thead>
            <tr>
              <th>Account</th>
              <th>Email</th>
              <th>Last online at</th>
              <th>Created at</th>
            </tr>
          </thead>
          <tbody>
            {(data?.users || []).map((user) => (
              <tr key={`user-${user.id}`}>
                <td>
                  <div className={styles.account}>
                    <div className={styles.avatar}>
                      <img
                        src={`https://gravatar.com/avatar/${md5(user.email)}`}
                      />
                    </div>
                    <div className={styles.details}>
                      <div className={styles.name}>{user.name}</div>
                      <div>{user.id}</div>
                    </div>
                  </div>
                </td>
                <td>{user.email}</td>
                <td>
                  {formatDate(
                    new Date(parseInt(`${user.lastOnlineAt}`)),
                    'd MMMM, yyyy HH:mm',
                  )}
                </td>
                <td>
                  {formatDate(
                    new Date(parseInt(`${user.createdAt}`)),
                    'd MMMM, yyyy HH:mm',
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Table>
    </div>
  );
};

export default AdminModuleUsers;
