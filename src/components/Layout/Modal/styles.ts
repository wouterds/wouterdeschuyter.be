import styled from 'styled-components';

export const backgroundColor = '#F3F6F8';

export const Container = styled.div`
  background: #fff;
  border: 1px solid #e6ecf1;
  border-radius: 5px;
  max-width: 480px;
  width: 100%;
  margin: 75px auto 25px;
  padding: 25px 30px 30px;

  input,
  button {
    max-width: 100%;
  }

  @media (max-width: 480px) {
    margin: 0 0 25px;
    border-radius: 0;
    border: 0;
  }
`;

export const Footer = styled.div`
  text-align: center;
`;
