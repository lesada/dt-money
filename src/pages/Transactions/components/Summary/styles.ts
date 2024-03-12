import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  max-width: ${({ theme }) => theme.containerMaxWidth};

  display: flex;
  gap: 2rem;

  margin: -5rem auto 0;
  padding: 0 ${({ theme }) => theme.containerPadding} 1rem;

  overflow-x: auto;

  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    height: 0.25rem;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.gray[600]};
    border-radius: 8px;
    margin: 0 ${({ theme }) => theme.containerPadding};
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.gray[300]};
    border-radius: 8px;
  }
`;
