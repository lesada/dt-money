import styled from "styled-components";

export const Container = styled.input`
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.gray[900]};
  color: ${({ theme }) => theme.colors.gray[300]};
  padding: 1rem;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[500]};
  }
`;
