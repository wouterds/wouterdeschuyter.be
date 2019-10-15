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
      display: block;

      &:hover {
        text-decoration: none;
      }
    }

    .likes {
      strong {
        padding: 0 0.25em;
      }

      .heads {
        position: relative;
        height: 2.25em;
        width: 2.25em;

        img {
          position: absolute;
        }
      }
    }

    .author,
    .likes {
      display: flex;
      align-items: center;
      color: inherit;

      img {
        height: 2.25em;
        width: 2.25em;
        border-radius: 1.125em;
        margin-right: 0.75em;
      }
    }

    .content {
      color: var(--color-text-lighter);
      padding: 0.25em;
    }
  }
`;
