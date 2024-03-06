import styled from "styled-components";

export const Container = styled.header`
  background: ${({ theme }) => theme.colors.gray[900]};
  padding: 2.5rem 0 7.5rem;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: ${({ theme }) => theme.containerMaxWidth};

  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.containerPadding};
`;

export const NewTransaction = styled.button`
  font-size: 1rem;
  background-color: ${({ theme }) => theme.colors.green[500]};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 0.25rem;
  padding: 0 1.25rem;
  border-radius: 6px;
  height: 50px;

  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.green[700]};
  }
`;
