import Card from "@/components/Card";
import { useTransactions } from "@/contexts/transactions";
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { useMemo } from "react";
import { useTheme } from "styled-components";
import { Container } from "./styles";

function Summary() {
  const { colors } = useTheme();
  const { transactions } = useTransactions();

  const summary = useMemo(() => {
    return transactions.reduce(
      (acc, transaction) => {
        if (transaction.type === "income") acc.incomes += transaction.value;
        else acc.outcomes += transaction.value;

        return {
          incomes: acc.incomes,
          outcomes: acc.outcomes,
          total: acc.incomes - acc.outcomes,
        };
      },
      { incomes: 0, outcomes: 0, total: 0 }
    );
  }, [transactions]);

  return (
    <Container>
      <Card
        icon={<ArrowCircleUp size={32} color={colors.green[300]} />}
        title="Incomes"
        value={summary.incomes}
      />
      <Card
        icon={<ArrowCircleDown size={32} color={colors.red[300]} />}
        title="Outcomes"
        value={summary.outcomes}
      />
      <Card
        icon={<CurrencyDollar size={32} color={colors.white} />}
        title="Balance"
        value={summary.total}
        detach
      />
    </Container>
  );
}

export default Summary;
