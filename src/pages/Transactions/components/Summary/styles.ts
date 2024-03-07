import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  max-width: ${({ theme }) => theme.containerMaxWidth};

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin: -5rem auto 0;
  padding: 0 ${({ theme }) => theme.containerPadding};
`;
