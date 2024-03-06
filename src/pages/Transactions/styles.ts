import styled from "styled-components";

export const Summary = styled.section`
  width: 100%;
  max-width: ${({ theme }) => theme.containerMaxWidth};

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -5rem;
  padding: 0 ${({ theme }) => theme.containerPadding};
`;
