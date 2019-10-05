import styled, { css } from 'styled-components';

export const Container = styled.footer<{ centered?: boolean }>`
  padding: 1.825em;
  color: #bbc4c9;
  margin-top: 2.5em;

  @media (max-width: 640px) {
    margin-top: 0.5em;
  }

  p + p {
    margin-top: 0.5em;
  }

  ${({ centered }) =>
    centered &&
    css`
      width: 100%;
      max-width: 960px;
      margin-left: auto;
      margin-right: auto;
    `}
`;
