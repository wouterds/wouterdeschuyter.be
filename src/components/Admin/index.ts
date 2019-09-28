import styled from 'styled-components';

export const Content = styled.div`
  background: #fff;
  padding: 25px;

  h1 {
    font-size: 1.5em;
    margin-bottom: 0.5em;
  }

  table {
    width: 100%;

    td,
    th {
      padding: 10px;

      &:first-child {
        padding-left: 0;
      }

      &:last-child {
        padding-right: 0;
      }
    }

    th {
      font-weight: 600;
      text-align: left;
      border-bottom: 2px solid #f3f6f8;
      white-space: nowrap;
    }

    td {
      width: 1px;
      white-space: nowrap;

      &.long {
        width: auto;
        max-width: 1px;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      &.id {
        width: 200px;
      }
    }
  }
`;
