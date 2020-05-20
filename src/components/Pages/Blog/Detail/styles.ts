import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 65vh;

  @media (max-width: 640px) {
    margin-top: 30vh;
  }
`;

export const Body = styled.div`
  > header {
    time {
      color: #ced5d9;
      font-weight: 600;
      text-transform: uppercase;
      font-size: 1em;
      margin-bottom: 0.5em;
      display: inline-block;
      transition: color ease-in-out 200ms;
    }
  }

  > h1 {
    font-weight: 700;
  }
`;
