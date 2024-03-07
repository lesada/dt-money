import styled from "styled-components";

export const Container = styled.table`
  width: 100%;
  max-width: ${({ theme }) => theme.containerMaxWidth};

  margin: 1.5rem auto 0;
  padding: 0 ${({ theme }) => theme.containerPadding};

  border-collapse: separate;
  border-spacing: 0 0.5rem;

  td {
    padding: 1.25rem 2rem;
    background: ${({ theme }) => theme.colors.gray[700]};

    &:first-child {
      border-radius: 6px 0 0 6px;
    }

    &:last-child {
      border-radius: 0 6px 6px 0;
    }

    &.income {
      color: ${({ theme }) => theme.colors.green[300]};
    }

    &.outcome {
      color: ${({ theme }) => theme.colors.red[300]};
    }
  }
`;
