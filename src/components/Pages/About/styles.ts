import styled, { css } from 'styled-components';

export const Container = styled.div`
  .age {
    font-variant-numeric: tabular-nums;
  }
`;

export const Social = styled.div`
  margin-top: 50px;

  h2 {
    margin-bottom: 0.75em;
  }
`;

export const SocialLink = styled.a<{
  twitter?: boolean;
  facebook?: boolean;
  instagram?: boolean;
  linkedIn?: boolean;
  github?: boolean;
}>`
  font-size: 1.5em;
  height: 46px;
  width: 46px;
  border-radius: 23px;
  border: 0 !important;
  display: inline-block;
  color: #fff !important;
  text-align: center;

  + a {
    margin-left: 20px;
  }

  ${({ twitter }) =>
    twitter &&
    css`
      background: #00aced;
      padding-left: 2px;
    `}

  ${({ facebook }) =>
    facebook &&
    css`
      background: #354e8b;
      padding-right: 1px;
    `}

  ${({ instagram }) =>
    instagram &&
    css`
      background: linear-gradient(
        #6559ca,
        #bc318f 30%,
        #e33f5f 50%,
        #f77638 70%,
        #fec66d 100%
      );
    `}

    ${({ linkedIn }) =>
      linkedIn &&
      css`
        background: #0f6baa;
        padding-left: 1px;
      `}

    ${({ github }) =>
      github &&
      css`
        background: #2d2d2d;
        padding-left: 1px;
      `}
`;
