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
    color: var(--color-text-light);
  }

  ${({ hasError }) =>
    hasError &&
    css`
      border-color: var(--color-tint);
    `}
`;
