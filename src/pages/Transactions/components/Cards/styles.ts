import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  padding: 0 ${({ theme }) => theme.containerPadding};
  margin-top: 1rem;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  padding: 1.25rem;
  border-radius: 0.375rem;
  background: ${({ theme }) => theme.colors.gray[700]};
`;

export const Title = styled.h2`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.gray[300]};
  line-height: 160%;
  font-weight: 400;
`;

export const Price = styled.span<{ $type: "income" | "outcome" }>`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.green};
  line-height: 160%;

  font-weight: 700;
  line-height: 160%;

  color: ${({ theme, $type }) =>
    $type === "income" ? theme.colors.green[300] : theme.colors.red[300]};
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 1rem;
  color: ${({ theme }) => theme.colors.gray[500]};
  line-height: 160%;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;
