import Card from "@/components/Card";
import Header from "@/components/Header";
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { useTheme } from "styled-components";
import { Summary, Table } from "./styles";

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
            title="Outcomes"
            value={800}
          />
          <Card
            icon={<CurrencyDollar size={32} color={colors.white} />}
            title="Balance"
            value={16200}
            detach
          />
        </Summary>
        <Table>
          <tbody>
            <tr>
              <td>Website development</td>
              <td className="income">$ 500.00</td>
              <td>Development</td>
              <td>20/02/2022</td>
            </tr>
            <tr>
              <td>Website development</td>
              <td className="income">$ 500.00</td>
              <td>Development</td>
              <td>20/02/2022</td>
            </tr>
            <tr>
              <td> Coffee Latte</td>
              <td className="outcome">- $ 500.00</td>
              <td>Food</td>
              <td>20/02/2022</td>
            </tr>
            <tr>
              <td>Website development</td>
              <td className="income">$ 500.00</td>
              <td>Development</td>
              <td>20/02/2022</td>
            </tr>
          </tbody>
        </Table>
      </main>
    </div>
  );
}

export default Transactions;
