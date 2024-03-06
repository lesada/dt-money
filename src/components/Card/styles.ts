import styled, { css } from "styled-components";

export const Container = styled.div<{ $detach?: boolean }>`
  background-color: ${({ theme }) => theme.colors.gray[600]};
  border-radius: 6px;
  padding: 2rem;

  ${({ $detach }) =>
    $detach &&
    css`
      background-color: ${({ theme }) => theme.colors.green[700]};
    `}
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  color: ${({ theme }) => theme.colors.gray[300]};
`;

export const Value = styled.strong`
  display: block;
  font-size: 2rem;
  margin-top: 1rem;
`;
