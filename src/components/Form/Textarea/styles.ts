import styled, { css } from 'styled-components';

export const Container = styled.textarea<{ hasError?: boolean }>`
  outline: 0;
  border: 1px solid #cfd4db;
  border-radius: 3px;
  padding: 0.5em;
  transition: border ease-in-out 200ms, color ease-in-out 200ms;
  width: 100%;
  color: var(--color-text-lighter);
  background: transparent;

  &:focus {
    border-color: #838f9e;
    color: #cfd4db;
  }

  @media (prefers-color-scheme: dark) {
    border-color: #2f3847;

    &:focus {
      border-color: #444f61;
    }

    ${({ hasError }) =>
      hasError &&
      css`
        border-color: var(--color-tint);
      `}
  }

  ${({ hasError }) =>
    hasError &&
    css`
      border-color: var(--color-tint);
    `}
`;
