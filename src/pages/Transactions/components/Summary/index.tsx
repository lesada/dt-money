import Card from "@/components/Card";
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { useTheme } from "styled-components";
import { Container } from "./styles";

function Sumary() {
  const { colors } = useTheme();

  return (
    <Container>
      <Card
        icon={<ArrowCircleUp size={32} color={colors.green[300]} />}
        title="Incomes"
        value={17000}
      />
      <Card
        icon={<ArrowCircleDown size={32} color={colors.red[300]} />}
        title="Outcomes"
        value={800}
      />
      <Card
        icon={<CurrencyDollar size={32} color={colors.white} />}
        title="Balance"
        value={16200}
        detach
      />
    </Container>
  );
}

export default Sumary;
