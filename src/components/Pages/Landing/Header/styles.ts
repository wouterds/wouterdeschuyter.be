import styled from 'styled-components';

export const Container = styled.header`
  background: #fff;
  text-align: center;
  border-bottom: 1px solid #ebeef0;
  margin-bottom: 4em;

  .image {
    height: 7em;
    width: 7em;
    border-radius: 3.5em;
    background: #10151f;
    overflow: hidden;
    margin-bottom: 1.25em;
    display: inline-block;

    img {
      border-radius: 3.5em;
      height: 7em;
      width: 7em;
    }
  }

  h1 {
    font-weight: 500;
    font-size: 2em;
    margin-bottom: 0.25em;
  }

  h2 {
    font-weight: 300;
    color: #bbc4c9;
    font-size: 1.4em;
    margin-bottom: 1.5em;
  }
`;
