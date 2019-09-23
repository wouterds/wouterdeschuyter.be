import styled, { css } from 'styled-components';

export const Container = styled.input<{ hasError?: boolean }>`
  outline: 0;
  border: 1px solid #cfd4db;
  border-radius: 3px;
  padding: 8px;
  transition: border ease-in-out 200ms;
  width: 100%;
  max-width: 320px;

  ${({ hasError }) =>
    hasError &&
    css`
      border-color: #ed52ad;
    `}

  &:focus {
    border: 1px solid #5882d4;
  }
`;
