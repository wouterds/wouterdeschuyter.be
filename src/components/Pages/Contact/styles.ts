import styled from 'styled-components';

export const Container = styled.header`
  form {
    margin-top: 1.5em;
    font-size: 0.9em;

    @media (max-width: 640px) {
      font-size: 1em;
    }
  }
`;

export const Row = styled.div`
  display: flex;
  margin: -15px;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

export const Col = styled.div`
  flex: 1;
  padding: 15px;

  @media (max-width: 640px) {
    & + div {
      margin-top: -15px;
    }
  }
`;
