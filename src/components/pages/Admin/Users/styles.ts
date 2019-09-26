import styled from 'styled-components';

export const backgroundColor = '#F3F6F8';

export const Content = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 25px;

  h1 {
    font-size: 1em;
  }

  table {
    width: 100%;

    th {
      font-weight: 600;
      text-align: left;
      border-bottom: 2px solid #f3f6f8;
    }

    td,
    th {
      padding: 10px 0;
    }
  }
`;
