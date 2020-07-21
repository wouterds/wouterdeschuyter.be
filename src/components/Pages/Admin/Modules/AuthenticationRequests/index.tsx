import { useQuery } from '@apollo/client';
import Loader from 'components/Loader';
import Table from 'components/Table';
import { User } from 'data/user';
import { format as formatDate } from 'date-fns';
import gql from 'graphql-tag';
import md5 from 'md5';
import React from 'react';

import styles from './styles.module.css';

type AuthenticationRequest = {
  token: string;
  userAgent: string;
  ip: string;
  user: User;
  consumedAt: string;
  createdAt: string;
};

const AdminModuleAuthenticationRequests = () => {
  const { data, loading } = useQuery<{
    authenticationRequests: AuthenticationRequest[];
  }>(
    gql`
      query {
        authenticationRequests {
          token
          userAgent
          ip
          consumedAt
          createdAt
          user {
            id
            name
            email
          }
        }
      }
    `,
  );

  const authenticationRequests = data?.authenticationRequests || [];
  if (authenticationRequests.length === 0 && loading) {
    return (
      <div className={styles.adminModuleAuthenticationRequests}>
        <div className={styles.loader}>
          <Loader />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.adminModuleAuthenticationRequests}>
      <Table>
        <table>
          <thead>
            <tr>
              <th>Account</th>
              <th>Email</th>
              <th>Consumed</th>
              <th>Created</th>
            </tr>
          </thead>
          <tbody>
            {authenticationRequests.map(
              (authenticationRequest, index: number) => {
                const { user } = authenticationRequest;

                return (
                  <tr key={`authentication-requests-${index}`}>
                    <td>
                      <div className={styles.account}>
                        <div className={styles.avatar}>
                          <img
                            src={`https://gravatar.com/avatar/${md5(
                              user.email,
                            )}`}
                            loading="lazy"
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
                      {authenticationRequest.consumedAt
                        ? formatDate(
                            new Date(
                              parseInt(`${authenticationRequest.consumedAt}`),
                            ),
                            'd MMMM, yyyy HH:mm',
                          )
                        : '--'}
                    </td>
                    <td>
                      {formatDate(
                        new Date(
                          parseInt(`${authenticationRequest.createdAt}`),
                        ),
                        'd MMMM, yyyy HH:mm',
                      )}
                    </td>
                  </tr>
                );
              },
            )}
          </tbody>
        </table>
      </Table>
    </div>
  );
};

export default AdminModuleAuthenticationRequests;
