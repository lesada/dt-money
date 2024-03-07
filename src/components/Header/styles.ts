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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme.colors.green[500]};
  border-radius: 6px;
  padding: 1rem;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  line-height: 160%;
  font-size: 1rem;
  transition: background-color 0.2s;
  margin-top: 1.5rem;

  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.green[700]};
  }
`;
