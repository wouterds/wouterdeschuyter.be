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
          <Link href="/admin/dashboard">
            <a>Dashboard</a>
          </Link>
        </NavItem>
        <NavItem active={active === 'posts'}>
          <Link href="/admin/posts">
            <a>Posts</a>
          </Link>
        </NavItem>
        <NavItem active={active === 'media'}>
          <Link href="/admin/media">
            <a>Media</a>
          </Link>
        </NavItem>
        <NavItem active={active === 'users'}>
          <Link href="/admin/users">
            <a>Users</a>
          </Link>
        </NavItem>
        <NavItem active={active === 'settings'}>
          <Link href="/admin/settings">
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
