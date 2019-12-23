import styled, { css } from 'styled-components';

export const Container = styled.footer<{ centered?: boolean }>`
  padding: 1.825em;
  color: var(--color-text-lightest);
  margin-top: 1.5em;

  @media (max-width: 640px) {
    margin-top: 0.5em;
  }

  p + p {
    margin-top: 0.5em;

    a {
      cursor: pointer;
      margin-left: 0.2em;
    }
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
