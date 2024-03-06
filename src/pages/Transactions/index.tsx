import Card from "@/components/Card";
import Header from "@/components/Header";
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { useTheme } from "styled-components";
import { Summary } from "./styles";

function Transactions() {
  const { colors } = useTheme();
  return (
    <div>
      <Header />
      <main>
        <Summary>
          <Card
            icon={<ArrowCircleUp size={32} color={colors.green[300]} />}
            title="Incomes"
            value={17000}
          />
          <Card
            icon={<ArrowCircleDown size={32} color={colors.red[300]} />}
            title="Expenses"
            value={800}
          />
          <Card
            icon={<CurrencyDollar size={32} color={colors.white} />}
            title="Balance"
            value={16200}
            detach
          />
        </Summary>
      </main>
    </div>
  );
}

export default Transactions;
