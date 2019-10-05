import styled, { css } from 'styled-components';

export const Container = styled.input<{ hasError?: boolean }>`
  outline: 0;
  border: 1px solid #cfd4db;
  border-radius: 3px;
  padding: 0.5em;
  transition: border ease-in-out 200ms, color ease-in-out 200ms;
  width: 100%;
  color: #74818b;

  ${({ hasError }) =>
    hasError &&
    css`
      border-color: #db2756;
    `}

  &:focus {
    border: 1px solid #838f9e;
    color: #48545e;
  }
`;
