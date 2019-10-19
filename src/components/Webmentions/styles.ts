import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 2.5em;

  ul {
    margin-top: 1.5em;
  }

  li {
    display: flex;
    margin-top: 0.75em;
    align-items: center;
    opacity: 0.9;
    transition: opacity ease-in-out 200ms;

    &:hover {
      opacity: 1;
    }

    a {
      color: var(--color-text-lighter);
      display: block;

      &:hover {
        text-decoration: none;
      }
    }

    .likes strong,
    .author {
      color: var(--color-text);
    }

    .likes {
      margin-bottom: 0.25em;

      strong {
        padding: 0 0.25em 0 0;
      }

      .heads {
        position: relative;
        height: 2.5em;
        width: 2.5em;

        @media (max-width: 500px) {
          margin-bottom: 0.5em;
        }

        .head {
          position: absolute;
        }
      }
    }

    .author,
    .likes {
      display: flex;
      align-items: center;

      @media (max-width: 500px) {
        align-items: flex-start;
        flex-direction: column;
        width: 100%;
      }

      .head {
        height: 3em;
        width: 3em;
        border-radius: 1.5em;
        margin-right: 0.5em;
        border: 0.125em solid #fff;
        background-color: #fff;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }
    }

    .author {
      @media (max-width: 500px) {
        width: auto;

        strong {
          display: none;
        }
      }
    }

    .content {
      padding: 0.25em;
      line-height: 1.4;

      strong {
        display: none;
        color: var(--color-text);
      }

      @media (max-width: 500px) {
        strong {
          display: block;
        }
      }
    }
  }
`;
