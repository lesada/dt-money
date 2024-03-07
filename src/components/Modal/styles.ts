import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  height: 100vh;
  width: 100vw;
`;

export const Content = styled.div`
  min-width: 32rem;
  padding: 2.5rem 3rem;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.gray[800]};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Close = styled.button`
  width: 1.5rem;
  height: 1.5rem;

  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
`;
