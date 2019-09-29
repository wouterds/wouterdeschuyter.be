import styled, { css } from 'styled-components';

export const backgroundColor = '#F3F6F8';

export const Container = styled.div<{ centered?: boolean }>`
  padding: 35px;

  ${({ centered }) =>
    centered &&
    css`
      max-width: 960px;
      margin: 0 auto;
    `}
`;
