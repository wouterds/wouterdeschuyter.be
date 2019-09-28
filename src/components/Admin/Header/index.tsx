import React, { useCallback, MouseEvent, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { AuthProps } from 'hocs/withAuth';
import { useCookie, Cookies } from 'hooks/cookie';
import { Container, Title, Nav, NavItem, User } from './styles';
import Link from 'next/link';

interface Props extends AuthProps {
  active: string;
}

export const Header = (props: Props) => {
  const { user, active } = props;
  const [jwt, setJwt] = useCookie(Cookies.JWT);

  const signOut = useCallback(
    (e: MouseEvent) => {
      e.preventDefault();
      setJwt('');
    },
    [setJwt],
  );

  useEffect(() => {
    if (!jwt) {
      window.location.pathname = '/admin/sign-in';
    }
  }, [jwt]);

  return (
    <Container>
      <Title>
        <h1>Admin</h1>
      </Title>
      <Nav>
        <NavItem active={active === 'dashboard'}>
          <Link href="/admin/dashboard" prefetch>
            <a>Dashboard</a>
          </Link>
        </NavItem>
        <NavItem active={active === 'posts'}>
          <Link href="/admin/posts" prefetch>
            <a>Posts</a>
          </Link>
        </NavItem>
        <NavItem active={active === 'media'}>
          <Link href="/admin/media" prefetch>
            <a>Media</a>
          </Link>
        </NavItem>
        <NavItem active={active === 'users'}>
          <Link href="/admin/users" prefetch>
            <a>Users</a>
          </Link>
        </NavItem>
        <NavItem active={active === 'settings'}>
          <Link href="/admin/settings" prefetch>
            <a>Settings</a>
          </Link>
        </NavItem>
      </Nav>
      <User>
        <div>
          {user.firstName} {user.lastName}
          <span>
            <FontAwesomeIcon icon={faChevronDown} />
          </span>
          <a href="#" onClick={signOut}>
            Sign out
          </a>
        </div>
      </User>
    </Container>
  );
};

export default Header;
