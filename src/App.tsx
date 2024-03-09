import { ThemeProvider } from "styled-components";
import { TransactionsProvider } from "./contexts/transactions";
import Transactions from "./pages/Transactions";
import { GlobalStyle } from "./styles/global";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TransactionsProvider>
        <Transactions />
      </TransactionsProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
