import { useQuery } from '@apollo/react-hooks';
import Table from 'components/Table';
import { User } from 'data/user';
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
              <th>Last online at</th>
              <th>Created at</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {(data?.users || []).map((user) => (
              <tr key={`user-${user.id}`}>
                <td>
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={`https://www.gravatar.com/avatar/${md5(
                          user.email,
                        )}`}
                        alt=""
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm leading-5 font-medium text-gray-900">
                        Bernard Lane
                      </div>
                      <div className="text-sm leading-5 text-gray-500">
                        bernardlane@example.com
                      </div>
                    </div>
                  </div>
                </td>
                <td>Owner</td>
                <td>Owner</td>
                <td>
                  <a href="#" className="text-indigo-600 hover:text-indigo-900">
                    Edit
                  </a>
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
