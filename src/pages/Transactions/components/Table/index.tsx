import { useTransactions } from "@/contexts/transactions";
import { formatToCurrency, formatToShortDate } from "@/utils/formatters";
import { Container } from "./styles";

function Table() {
  const { transactions } = useTransactions();
  return (
    <Container>
      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.description}</td>
            <td className={transaction.type}>
              {transaction.type === "outcome" && "-"}
              {formatToCurrency(transaction.value)}
            </td>
            <td>{transaction.category}</td>
            <td>{formatToShortDate(transaction.createdAt)}</td>
          </tr>
        ))}
      </tbody>
    </Container>
  );
}

export default Table;
