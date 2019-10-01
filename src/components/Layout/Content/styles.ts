import styled, { css } from 'styled-components';

export const backgroundColor = '#F3F6F8';

export const Container = styled.section<{
  centered?: boolean;
  editorial?: boolean;
}>`
  flex: 1;
  width: 100%;
  padding: 35px;
  font-size: 1.2em;

  ${({ centered }) =>
    centered &&
    css`
      max-width: 960px;
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
          width: 1.5em;
          margin-top: 0.5em;
          margin-bottom: 1em;
        }
      }
    `}
`;
