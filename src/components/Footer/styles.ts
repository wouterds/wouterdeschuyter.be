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
      opacity: 0.75;
      transition: opacity ease-in-out 100ms;
      flex: 1;
      margin-left: 0.25em;

      &:hover {
        opacity: 1;
      }
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
