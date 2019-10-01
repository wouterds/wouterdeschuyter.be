import styled, { css } from 'styled-components';

export const Container = styled.footer<{ centered?: boolean }>`
  padding: 35px;
  color: #bbc4c9;
  margin-top: 2.5em;

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
