import { TTransaction } from "@/types/transaction";
import formatToCurrency from "@/utils/formatToCurrency";
import { Container } from "./styles";

type TableProps = {
  transactions: TTransaction[];
};

function Table({ transactions }: TableProps) {
  return (
    <Container>
      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.description}</td>
            <td className={transaction.type}>
              {transaction.type === "outcome" && "-"}
              {formatToCurrency(transaction.price)}
            </td>
            <td>{transaction.category}</td>
            <td>{transaction.createdAt}</td>
          </tr>
        ))}
      </tbody>
    </Container>
  );
}

export default Table;
