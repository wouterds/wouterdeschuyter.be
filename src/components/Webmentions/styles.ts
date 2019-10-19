import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 2.5em;

  @media (max-width: 640px) {
    display: none;
  }

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
      strong {
        padding: 0 0.25em;
      }

      .heads {
        position: relative;
        height: 2.5em;
        width: 2.5em;

        .head {
          position: absolute;
        }
      }
    }

    .author,
    .likes {
      display: flex;
      align-items: center;

      .head {
        height: 2.5em;
        width: 2.5em;
        border-radius: 1.25em;
        margin-right: 0.5em;
        border: 0.125em solid #fff;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }
    }

    .content {
      padding: 0.25em;
    }
  }
`;
