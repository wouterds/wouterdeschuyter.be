import styled from 'styled-components';

export const Container = styled.div`
  a:hover {
    text-decoration: none;
  }
`;

export const Post = styled.article`
  a {
    border: 0;
    transition: color ease-in-out 200ms;
    display: block;
    color: inherit;

    &:hover {
      h2 {
        color: #db2756;
      }
    }

    &:focus {
      h2 {
        color: #2b2f33;
      }
    }
  }

  h2 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 100%;
    font-size: 1.6em;
    transition: color ease-in-out 200ms;
    margin-bottom: 0.25em;
  }

  time {
    color: #ced5d9;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 0.75em;
    margin-bottom: 0.25em;
    display: inline-block;
    transition: color ease-in-out 200ms;
  }

  p {
    margin-top: 0;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  + article {
    border-top: 1px solid #f0f3f5;
    margin-top: 1.5em;
    padding-top: 1.5em;
  }
`;
