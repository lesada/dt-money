import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    border: 0;
    padding: 0;
  }

  *:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.green[500]};
  }

  body {
    background-color: ${({ theme }) => theme.colors.gray[800]};
    color: ${({ theme }) => theme.colors.gray[100]};
    -webkit-font-somoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  button {
    cursor: pointer;

    background-color: transparent;
    border: 0;
    outline: 0;
  }

  button:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
