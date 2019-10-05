import styled from 'styled-components';

export const Container = styled.div``;

export const Links = styled.div`
  text-align: right;
  margin-top: 2.5em;
  display: flex;
  justify-content: space-between;
  width: 100%;

  a {
    font-size: ${16 / 19.2}em;
    font-weight: 500;
    border: 0;
    color: #939aa3;
    transition: color ease-in-out 200ms;

    &:hover {
      color: #2b2f33;
      text-decoration: none;
    }
  }
`;
