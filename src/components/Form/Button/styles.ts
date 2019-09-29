import styled, { css } from 'styled-components';

export const Container = styled.button<{ isLoading?: boolean }>`
  outline: 0;
  border: 1px solid #5882d4;
  background: #5882d4;
  color: #fff;
  border-radius: 3px;
  padding: 0.5em;
  transition: border ease-in-out 200ms, background ease-in-out 200ms;
  width: 100%;
  font-weight: 500;
  cursor: pointer;
  position: relative;

  &:hover {
    border-color: #ef50ae;
    background: #ef50ae;
  }

  ${({ isLoading }) =>
    isLoading &&
    css`
      text-align: left;
      text-indent: -9999px;
      background: #ef50ae;
      border-color: #ef50ae;
      cursor: default;

      @keyframes spinner {
        to {
          transform: rotate(360deg);
        }
      }

      &:before {
        content: '';
        box-sizing: border-box;
        position: absolute;
        top: 50%;
        left: 50%;
        width: 20px;
        height: 20px;
        margin-top: -10px;
        margin-left: -10px;
        border-radius: 50%;
        border: 2px solid rgba(255, 255, 255, 0.5);
        border-top-color: #fff;
        animation: spinner 0.6s linear infinite;
      }
    `}
`;
