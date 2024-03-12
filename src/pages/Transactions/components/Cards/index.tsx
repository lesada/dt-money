import { useTransactions } from "@/contexts/transactions";
import { formatToCurrency, formatToShortDate } from "@/utils/formatters";
import { CalendarBlank, TagSimple } from "phosphor-react";
import { Container, Item, Price, Row, Title } from "./styles";

function Cards() {
  const { transactions } = useTransactions();

  return (
    <Container>
      {transactions.map((transaction) => (
        <Item key={transaction.id}>
          <Title>{transaction.description}</Title>
          <Price $type={transaction.type}>
            {transaction.type === "outcome" && "- "}
            {formatToCurrency(transaction.value)}
          </Price>
          <Row>
            <span>
              <TagSimple size={16} weight="light" />
              {transaction.category}
            </span>
            <span>
              <CalendarBlank size={16} weight="light" />
              {formatToShortDate(transaction.createdAt)}
            </span>
          </Row>
        </Item>
      ))}
    </Container>
  );
}

export default Cards;
