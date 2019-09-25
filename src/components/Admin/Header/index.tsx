import React from 'react';
import { Container, Title, Nav, NavItem, User } from './styles';
import { AuthProps } from 'hocs/auth';

export const Header = (props: AuthProps) => {
  const { user } = props;

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
        {user.firstName} {user.lastName}
      </User>
    </Container>
  );
};

export default Header;
