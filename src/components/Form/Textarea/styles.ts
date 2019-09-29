import styled, { css } from 'styled-components';

export const Container = styled.textarea<{ hasError?: boolean }>`
  outline: 0;
  border: 1px solid #cfd4db;
  border-radius: 3px;
  padding: 0.5em;
  transition: border ease-in-out 200ms;
  width: 100%;
  color: #42494f;

  ${({ hasError }) =>
    hasError &&
    css`
      border-color: #ed52ad;
    `}

  &:focus {
    border: 1px solid #5882d4;
  }
`;
