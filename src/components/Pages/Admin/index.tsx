import cx from 'classnames';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Layout from 'components/Layout';
import Meta from 'components/Meta';
import withAuth from 'hocs/withAuth';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import AdminModuleAuthenticationRequests from './Modules/AuthenticationRequests';
import AdminModuleDashboard from './Modules/Dashboard';
import AdminModuleMediaAssets from './Modules/MediaAssets';
import AdminModulePostAliases from './Modules/PostAliases';
import AdminModulePosts from './Modules/Posts';
import AdminModuleUsers from './Modules/Users';
import styles from './styles.module.css';

const Admin = () => {
  const { query } = useRouter();
  const page = query['sub-page'] || 'dashboard';

  return (
    <Layout>
      <Meta
        title="Admin"
        extra={<meta key="robots" name="robots" content="noindex, follow" />}
      />
      <Header />
      <Layout.Content fullWidth>
        <div className={styles.admin}>
          <nav className={styles.nav}>
            <Link href="/admin" as="/admin">
              <a
                className={cx({
                  [styles.active]: page === 'dashboard',
                })}
              >
                Dashboard
              </a>
            </Link>
            <Link href="/admin/[sub-page]" as="/admin/users">
              <a
                className={cx({
                  [styles.active]: page === 'users',
                })}
              >
                Users
              </a>
            </Link>
            <Link href="/admin/[sub-page]" as="/admin/media-assets">
              <a
                className={cx({
                  [styles.active]: page === 'media-assets',
                })}
              >
                Media assets
              </a>
            </Link>
            <Link href="/admin/[sub-page]" as="/admin/posts">
              <a
                className={cx({
                  [styles.active]: page === 'posts',
                })}
              >
                Posts
              </a>
            </Link>
            <Link href="/admin/[sub-page]" as="/admin/post-aliases">
              <a
                className={cx({
                  [styles.active]: page === 'post-aliases',
                })}
              >
                Post aliases
              </a>
            </Link>
            <Link href="/admin/[sub-page]" as="/admin/authentication-requests">
              <a
                className={cx({
                  [styles.active]: page === 'authentication-requests',
                })}
              >
                Authentication requests
              </a>
            </Link>
            <Link href="/admin/[sub-page]" as="/admin/access-tokens">
              <a
                className={cx({
                  [styles.active]: page === 'access-tokens',
                })}
              >
                Access tokens
              </a>
            </Link>
            <Link href="/admin/[sub-page]" as="/admin/sensors">
              <a
                className={cx({
                  [styles.active]: page === 'sensors',
                })}
              >
                Sensors
              </a>
            </Link>
          </nav>
          <div className={styles.content}>
            {page === 'dashboard' && <AdminModuleDashboard />}
            {page === 'users' && <AdminModuleUsers />}
            {page === 'media-assets' && <AdminModuleMediaAssets />}
            {page === 'posts' && <AdminModulePosts />}
            {page === 'post-aliases' && <AdminModulePostAliases />}
            {page === 'authentication-requests' && (
              <AdminModuleAuthenticationRequests />
            )}
          </div>
        </div>
      </Layout.Content>
      <Footer fullWidth />
    </Layout>
  );
};
export default withAuth(Admin as any);
