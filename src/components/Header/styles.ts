import styled from 'styled-components';

export const Container = styled.header`
  background: #fff;
  display: flex;
`;

export const Title = styled.div`
  padding: 25px;
  flex: 1;

  a {
    border: 0;
    color: #2b2f33;
    display: inline-block;
  }

  h1 {
    font-size: 1.8em;
    line-height: 1;
    font-weight: 600;
    padding: 10px;
    margin: 0;
    display: inline-block;
  }
`;

export const Nav = styled.nav`
  padding: 25px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-weight: 500;

  a {
    padding: 10px;
    border: 0;
    color: #888;
    transition: color ease-in-out 200ms;

    &.active,
    &:hover {
      color: #2b2f33;
    }

    + a {
      margin-left: 10px;
    }
  }
`;