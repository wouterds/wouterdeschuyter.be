import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  font-size: 1.6rem;
  line-height: 1.6;
  color: #3b454e;
  flex: 1;

  input,
  textarea,
  button,
  select {
    font-size: 1.6rem;
    line-height: 1;
  }

  textarea {
    line-height: 1.4;
  }

  h1,
  h2,
  h3 {
    margin-bottom: 0.75em;
    font-weight: 600;
  }

  h1 {
    font-size: 1.8em;
  }

  h2 {
    font-size: 1.6em;
  }

  h3 {
    font-size: 1.4em;
  }

  a {
    text-decoration: none;
    padding-bottom: 1px;
    border-bottom: 2px solid #e1e1e1;
    color: #30373d;
    transition: border ease-in-out 200ms;

    &:hover {
      border-color: #ef50ae;
    }
  }
`;

export const Content = styled.div`
  padding: 25px;
`;
