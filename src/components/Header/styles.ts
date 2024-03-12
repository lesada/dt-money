import * as RadioGroup from "@radix-ui/react-radio-group";
import styled from "styled-components";

export const Container = styled.header`
  background: ${({ theme }) => theme.colors.gray[900]};
  padding: 2.5rem 0 7.5rem;
`;

export const Image = styled.div`
  flex: 1;
  max-width: 11rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2em;

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
  flex-shrink: 0;

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

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.green[700]};
  }
`;

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 0.5rem;
`;

export const TransactionTypeButton = styled(RadioGroup.Item)<{
  $variant: "income" | "outcome";
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  color: ${({ theme }) => theme.colors.gray[300]};
  background-color: ${({ theme }) => theme.colors.gray[700]};
  border-radius: 6px;
  padding: 1rem;
  transition: background-color 0.2s;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px
      ${({ theme, $variant }) =>
        $variant === "income"
          ? theme.colors.green[500]
          : theme.colors.red[500]};
  }

  svg {
    color: ${({ theme, $variant }) =>
      $variant === "income" ? theme.colors.green[300] : theme.colors.red[300]};
    transition: color 0.2s;
  }

  &[data-state="checked"] {
    background-color: ${({ theme, $variant }) =>
      $variant === "income" ? theme.colors.green[700] : theme.colors.red[700]};
    color: ${({ theme }) => theme.colors.gray[100]};
    svg {
      color: ${({ theme }) => theme.colors.gray[100]};
    }
  }

  &[data-state="unchecked"]:hover {
    background-color: ${({ theme }) => theme.colors.gray[600]};
  }
`;
