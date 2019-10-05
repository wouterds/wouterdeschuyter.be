import styled from 'styled-components';

export const Container = styled.div<{ image: string }>`
  width: 100%;
  height: 65vh;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: #111 url('${({ image }) => image}');
  background-size: cover;
  background-position: center;

  @media (max-width: 640px) {
    height: 35vh;
  }

  &:after {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    content: '';
    background: linear-gradient(rgba(0, 0, 0, 0.4), transparent 50%)
      rgba(0, 0, 0, 0.4);
  }

  img {
    position: absolute;
    opacity: 0;
  }
`;
