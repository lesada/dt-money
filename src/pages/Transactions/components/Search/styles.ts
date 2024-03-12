import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  gap: 1rem;

  padding: 0 ${({ theme }) => theme.containerPadding};
  width: 100%;
  max-width: ${({ theme }) => theme.containerMaxWidth};
  margin: 4rem auto 0;
`;

export const Input = styled.input`
  flex: 1;

  padding: 1rem;
  color: ${({ theme }) => theme.colors.gray[300]};
  border-radius: 6px;
  border: 0;
  background-color: ${({ theme }) => theme.colors.gray[900]};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[500]};
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.green[300]};
  color: ${({ theme }) => theme.colors.green[300]};
  border-radius: 6px;
  font-weight: bold;

  transition:
    background-color 0.2s,
    color 0.2s,
    border-color 0.2s;

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.green[300]};
    color: ${({ theme }) => theme.colors.white};
    border-color: ${({ theme }) => theme.colors.green[300]};
  }

  @media screen and (min-width: 769px) {
    &::after {
      content: "Search";
    }
  }
`;
