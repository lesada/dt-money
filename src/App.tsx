import { ThemeProvider } from "styled-components";
import Transactions from "./pages/Transactions";
import { GlobalStyle } from "./styles/global";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Transactions />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
