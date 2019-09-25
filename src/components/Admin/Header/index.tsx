import React, { useCallback, MouseEvent, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { AuthProps } from 'hocs/auth';
import { useCookie, Cookies } from 'hooks/cookie';
import { Container, Title, Nav, NavItem, User } from './styles';

export const Header = (props: AuthProps) => {
  const { user } = props;
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
        <NavItem active={true}>
          <a href="">Dashboard</a>
        </NavItem>
        <NavItem>
          <a href="">Posts</a>
        </NavItem>
        <NavItem>
          <a href="">Media assets</a>
        </NavItem>
        <NavItem>
          <a href="">Users</a>
        </NavItem>
        <NavItem>
          <a href="">Settings</a>
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
