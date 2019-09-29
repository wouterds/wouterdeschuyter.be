import styled, { css } from 'styled-components';

export const backgroundColor = '#F3F6F8';

export const Container = styled.div<{
  centered?: boolean;
  editorial?: boolean;
}>`
  padding: 35px;
  font-size: 1.2em;

  ${({ centered }) =>
    centered &&
    css`
      max-width: 1000px;
      margin: 0 auto;
    `}

  ${({ editorial }) =>
    editorial &&
    css`
      h1 {
        &:after {
          content: '';
          display: block;
          background: #2b2f33;
          height: 0.1em;
          width: 2em;
          margin-top: 0.5em;
          margin-bottom: 1em;
        }
      }
    `}
`;
