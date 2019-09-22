import styled from 'styled-components';

export const Container = styled.button`
  outline: 0;
  border: 1px solid #5882d4;
  background: #5882d4;
  color: #fff;
  border-radius: 3px;
  padding: 9px;
  transition: border ease-in-out 200ms, background ease-in-out 200ms;
  width: 100%;
  max-width: 320px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    border-color: #ed52ad;
    background: #ed52ad;
  }
`;
